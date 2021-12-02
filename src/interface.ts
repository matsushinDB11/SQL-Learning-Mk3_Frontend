export type LoginState = 'signin' | 'signout' | '';

export type LoginInfo = {
    state: LoginState;
    userid: string;
    email: string;
    isAdmin: boolean;
};
