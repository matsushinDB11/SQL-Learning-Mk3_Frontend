import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useState,
} from 'react';

type loginState = 'signin' | 'signout' | '';

interface LoginInfo {
    state: loginState;
    email: string;
    isAdmin: boolean;
}

const initialLoginInfo: LoginInfo = {
    state: '',
    email: '',
    isAdmin: false,
};

type TAuthContext = {
    loginState: LoginInfo;
    setLoginState: Dispatch<LoginInfo>;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

const useAuthContext = () => {
    const context = useContext<TAuthContext | undefined>(AuthContext);
    if (context === undefined) throw new Error('context is undefined');

    return context;
};

type Props = {
    children?: ReactNode;
};

const AuthProvider = (props: Props) => {
    const [loginState, setLoginState] = useState<LoginInfo>(initialLoginInfo);
    const state: TAuthContext = {
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
export type { loginState, LoginInfo };
