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

export type { TPostIdToken, TGetQuestionsList, TGetQuestionForList };
