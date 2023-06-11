import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/"



export const register = createAsyncThunk('auth/register', async (data, thunkApi) => {
    try {
        const response = await axios.post("/users/singup", data);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})