import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ede436a6bbd775f86299b7a3a66b58850ecfc7944499220d336805557f519b3b',
    },
})