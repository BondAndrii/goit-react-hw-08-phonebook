

export const selectIsLoggedIn = state => {
    console.log("selectIsLoggedIn", state.auth.isLoggedIn)
    return state.auth.isLoggedIn;
}