import axios from 'axios';
const KEY = 'AIzaSyAAEN_kXII8wRs0cW6QnSQcr5lvosu8iDc';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY,
        type: 'video',
    },
    headers: {
        API_KEY: KEY,
    }
})