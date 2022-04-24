import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

export const userLogin = (user) => {
    return (dispatch) => {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(authActions.loginSuccess(user));
    };
};


export const userLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('user');
        dispatch(authActions.logout());
    };
};
