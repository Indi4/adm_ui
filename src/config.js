const dev = {
    apiUrl: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000',
};

const prod = {
    apiUrl: process.env.REACT_APP_API_URL || '/api',
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
