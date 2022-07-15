import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        errorMsg: '',
        userId: '',
        phoneNumber: '',
        email: '',
        firstName: '',
        lastName: '',
        isLoggedIn: false,
        currentLocation: {
            coords: {},
            address: ''
        },
    },

    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        SAVE_PERSONAL_DATA: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        SET_ERROR: (state, action) => {
            state.errorMsg = action.payload.errorMsg
        },
        LOGIN_SUCCESS: (state, action) => {
            state.email = action.payload.email
            state.userId = action.payload.userId
            state.isLoggedIn = action.payload.isLoggedIn
        },
        SAVE_CONTACT_DETAILS: (state, action) => {
            state.email = action.payload.email
            state.phoneNumber = action.payload.phoneNumber
        },
        LOGOUT_USER: (state) => {
            state.isLoggedIn = false
        },
        LOGIN_USER: (state) => {
            state.isLoggedIn = true
        },
        SET_PICKUP_LOCATION: (state, action) => {
            state.currentLocation = action.payload
        }
    },
});

export const { SAVE_PERSONAL_DATA, SET_ERROR, LOGIN_SUCCESS, SAVE_CONTACT_DETAILS, LOGOUT_USER, LOGIN_USER, SET_PICKUP_LOCATION } = auth.actions;

export default auth.reducer;
