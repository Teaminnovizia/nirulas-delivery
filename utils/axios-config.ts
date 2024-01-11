'use client'

import axios from 'axios';
import { getCookie } from 'cookies-next';
import { BaseUrl } from './constants';
// import { getToken } from './cookies';

export {
    getCookie
};

// Default config options
const defaultOptions = {
    baseURL: BaseUrl,
    headers: {
        // Authorization: `Bearer ${getToken()}`,
        "mobile": getCookie("mobile"),
        "token": getCookie("token"),
        "is_site": 1
    },
};

// Create instance
export const server = axios.create(defaultOptions);