import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useState,
} from 'react';

export type loginState = 'signin' | 'signout' | '';

interface LoginInfo {
    state: loginState;
    userid: number;
    email: string;
    isAdmin: boolean;
}

const initialLoginInfo: LoginInfo = {
    state: '',
    userid: 0,
    email: '',
    isAdmin: false,
};

type LoginState = {
    loginState: LoginInfo | undefined;
    setLoginState: Dispatch<LoginInfo> | undefined;
};

const AuthContext = createContext<LoginState>({
    loginState: undefined,
    setLoginState: undefined,
});

const useAuthContext = () => {
    return useContext<LoginState>(AuthContext);
};

type Props = {
    children?: ReactNode;
};

const AuthProvider = (props: Props) => {
    const [loginState, setLoginState] = useState<LoginInfo>(initialLoginInfo);
    const state: LoginState = {
        loginState,
        setLoginState,
    };

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { useAuthContext, AuthProvider };
