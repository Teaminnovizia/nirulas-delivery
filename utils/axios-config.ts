import axios from 'axios';
// import { getToken } from './cookies';

// Default config options
const defaultOptions = {
    headers: {
        // Authorization: `Bearer ${getToken()}`,
    },
};

// Create instance
export const server = axios.create(defaultOptions);