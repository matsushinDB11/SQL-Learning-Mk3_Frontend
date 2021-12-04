type _config = {
    GoogleClientID: string;
};

const Config: _config = {
    GoogleClientID: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
};

export default Config;
