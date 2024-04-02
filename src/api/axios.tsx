import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://college-mcq.onrender.com/'; // Set your API base URL

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${localStorage.getItem('problem_setter_token')}`,
        'Access-Control-Allow-Origin': '*',
        'Allow-Access-Control-Origin': '*',
        'include-credentials': 'true'
    },
});

export default instance;
