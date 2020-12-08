import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {    
        key: 'AIzaSyAVda0ZcNvFLG0A4t093qLH18HVTrQMkfE',
        maxResult: 10,
        part: 'snippet',
    }
});