export type LoginState = 'signin' | 'signout' | '';

export type LoginInfo = {
    state: LoginState;
    userid: number;
    email: string;
    isAdmin: boolean;
};
