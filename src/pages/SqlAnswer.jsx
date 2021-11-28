import React, {useState, useEffect} from "react";
import initSqlJs from "sql.js";
import '../styles/SqlAnswer.css'
import {
    Container,
    Paper,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";

// Required to let webpack 4 know it needs to copy the wasm file to our assets
import sqlWasm from "sql.js/dist/sql-wasm.wasm";

export default function App() {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // sql.js needs to fetch its wasm file, so we cannot immediately instantiate the database
            // without any configuration, initSqlJs will fetch the wasm files directly from the same path as the js
            // see ../craco.config.js
            try {
                const SQL = await initSqlJs({locateFile: () => sqlWasm});
                const dbStorage = await fetch("./database1.sqlite3")
                setDb(new SQL.Database(new Uint8Array((await dbStorage.arrayBuffer()))));
            } catch (err) {
                setError(err);
            }
        }
        fetchData();
    }, []);

    if (error) return <pre>{error.toString()}</pre>;
    else if (!db) return <pre>Loading...</pre>;
    else return <SQLRepl db={db}/>;
}

/**
 * A simple SQL read-eval-print-loop
 * @param {{db: import("sql.js").Database}} props
 */
function SQLRepl({db}) {
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);

    function exec(sql) {
        try {
            // The sql is executed synchronously on the UI thread.
            // You may want to use a web worker here instead
            setResults(db.exec(sql)); // an array of objects is returned
            setError(null);
        } catch (err) {
            // exec throws an error when the SQL statement is invalid
            setError(err);
            setResults([]);
        }
    }

    return (
        <div className="App">
            <h1>SQL Learning React</h1>

            <Container>
                <TextField
                    onChange={(e) => exec(e.target.value)}
                    multiline
                    fullWidth
                />
                <Button variant="contained">実行</Button>
                <pre className="error">{(error || "").toString()}</pre>
            </Container>

            <pre>
        {
            // results contains one object per select statement in the query
            results.map(({columns, values}, i) => (
                <ResultsTable key={i} columns={columns} values={values}/>
            ))
        }
      </pre>
        </div>
    );
}

/**
 * Renders a single value of the array returned by db.exec(...) as a table
 * @param {import("sql.js").QueryExecResult} props
 */
function ResultsTable({columns, values}) {
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650, maxWidth: 1500}} aria-label="">
                    <TableHead>
                        <TableRow>
                            {columns.map((columnName, i) => (
                                <TableCell key={i}>{columnName}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {values.map((row, i) => (
                            <TableRow key={i}>
                                {row.map((value, i) => (
                                    <TableCell key={i}>{value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
