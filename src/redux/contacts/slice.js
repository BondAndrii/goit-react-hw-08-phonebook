import { createSlice } from "@reduxjs/toolkit";

import { addContact, deleteContact, editContact, fetchContacts } from "./operations";

const pendingReducer = state => {
    state.isLoading = true;
};

const rejectedReducer = (state) => {
    state.isLoading = false;
    state.error = "Sorry, request error. Please, check your internet connections";
};

const fetchContactsFulfilledReducer = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};
const addContactFulfilledReducer = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
};
const deleteContactFulfilledReducer = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
        contact => contact.id === action.payload.id);
    state.items.splice(index, 1);
};

const editContactFulfiledReducer = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.modalOpen = !state.modalOpen;
    console.log("editContactSlice", action.payload);
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        modalOpen: false,
        editForm: false,
        error: null,
    },
    reducers: {
        openForm(state, action) {
            // return state.modalOpen = !state.modalOpen; не катить, бо тут одночасно і ретурн і мутація, 
            // а можна або те, або інше
            state.modalOpen = true;
        },
        openEditForm(state, action) {
            state.modalOpen = true;
            state.editForm = true;
        },
        closeModal(state, action) {
            state.modalOpen = false;
            state.editForm = false;
        },
    },
    extraReducers: builder =>
        builder.addCase(fetchContacts.pending, pendingReducer)
            .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
            .addCase(fetchContacts.rejected, rejectedReducer)
            .addCase(addContact.pending, pendingReducer)
            .addCase(addContact.fulfilled, addContactFulfilledReducer)
            .addCase(addContact.rejected, rejectedReducer)
            .addCase(deleteContact.pending, pendingReducer)
            .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
            .addCase(deleteContact.rejected, rejectedReducer)
            .addCase(editContact.pending, pendingReducer)
            .addCase(editContact.fulfilled, editContactFulfiledReducer)
            .addCase(editContact.rejected, rejectedReducer)
});



export const contactsReducer = contactsSlice.reducer;

export const { openForm, openEditForm, closeModal } = contactsSlice.actions;


