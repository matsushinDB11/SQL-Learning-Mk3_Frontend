type _config = {
    GoogleClientID: string;
    ApiUrl: string;
};

const Config: _config = {
    GoogleClientID: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    ApiUrl: process.env.REACT_APP_API_URL || '',
};

export default Config;
