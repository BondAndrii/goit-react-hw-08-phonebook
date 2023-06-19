import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
        try {
                const response = await axios.get("/contacts");
                return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
    
});

export const addContact = createAsyncThunk("contacts/addContact", async (data, thunkAPI) => {
    try {
        const responce = await axios.post("/contacts", data );
        return responce.data;
    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactId}`);
        return responce.data;
    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.message);
    }
} )

export const editContact = createAsyncThunk(
  'contacts/editContact',
    async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${data.id}`,{
        name: data.name,
        number: data.number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })