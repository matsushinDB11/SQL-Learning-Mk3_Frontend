// TODO Open Api Generator の生成ファイルに切り替える

type TPostIdToken = {
    id_token: string;
};

type TGetQuestionForList = {
    ID: number;
    title: string;
};

type TGetQuestionsList = {
    questions: TGetQuestionForList[];
};

type TGetQuestion = {
    ID: number;
    title: string;
    classID: number;
    sqliteBase64: string;
};

export type {
    TPostIdToken,
    TGetQuestionsList,
    TGetQuestionForList,
    TGetQuestion,
};
