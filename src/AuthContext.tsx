import { createContext, ReactNode, useEffect, useState } from 'react';

export type loginState = 'signin' | 'signout' | '';

interface LoginInfo {
    state: loginState;
    userid: number;
    email: string;
    isAdmin: boolean;
}

type Props = {
    children?: ReactNode;
};

const AuthContext = createContext<LoginInfo>({
    state: '',
    userid: 0,
    email: '',
    isAdmin: false,
});

const AuthProvider = (props: Props) => {
    const [loginState, setLoginState] = useState<loginState>('');
    useEffect(() => {
        // TODO ログイン状態の変更を検知してセットする
        setLoginState('');
    });

    return (
        <AuthContext.Provider
            value={{
                // TODO ログインしたユーザーの情報をセット
                state: loginState,
                userid: 1,
                email: '',
                isAdmin: false,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
