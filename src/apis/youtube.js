import axios from 'axios';

const KEY = 'AIzaSyByzyqBCM_M-x16f0arK6PpgtGNQmP9i-Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});