

export const selectIsLoggedIn = state => {
    // console.log("selectIsLoggedIn", state.auth.isLoggedIn)
    return state.auth.isLoggedIn;
}

export const selectUser = state => state.auth.user.name;

export const selectIsRefreching = state => state.auth.isRefreshing;