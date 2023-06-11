import axios from "axios";

// import { contactsUrl } from "data/contactsLink";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token} `
}

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
// }
// export const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     }
// };

export const register = createAsyncThunk('auth/register', async (data, thunkApi) => {
    // console.log("in register data", data)
    try {
        const response = await axios.post('/users/signup', data);
        setAuthHeader(response.data.token);
        // console.log("in register", response.data)
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})