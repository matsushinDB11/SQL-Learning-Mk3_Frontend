import { AppBar, Box, Typography } from '@mui/material';

const Header = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                SQL Learning
            </Typography>
        </AppBar>
    </Box>
);

export default Header;
