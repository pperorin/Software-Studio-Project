import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

export const userLogin = (email, password) => {
    return (dispatch) => {
        
    };
};


export const userLogout = () => {
    return (dispatch) => {
        dispatch(authActions.logout());
    };
};
