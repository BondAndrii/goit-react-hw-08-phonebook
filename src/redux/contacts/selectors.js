import { createSelector } from "@reduxjs/toolkit";

import { selectFilter } from "redux/filter/selectors";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], (item, filter) => {
    if (!filter) {
        return item;
     } else {
        const normalizedFilter = filter.toLowerCase();
        const findAbonent = item.filter(({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || 
            number.trim().includes(normalizedFilter)); 
         return findAbonent;
    }
    }
)

// export const selectFilteredContacts = state => {
//     const item = selectContacts(state);
//     const filter = selectFilter(state);

    //  if (!filter) {
    //   return item;
    //  } else {
    //     const normalizedFilter = filter.toLowerCase();
    //     const findAbonent = item.filter(({ name, number }) => name.toLowerCase().trim().includes(normalizedFilter) || 
    //         number.trim().includes(normalizedFilter)); 
    //      return findAbonent;
    // }
// }

