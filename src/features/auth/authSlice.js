import { createSlice } from "@reduxjs/toolkit";

// Helper function to get user data from local storage
const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("user")) || null;
};

// Initial state with user data from local storage
const initialState = {
    user: getUserFromLocalStorage(),
};

// Create a slice for authentication
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to handle user login
        loginUser: (state, action) => {
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user)); // Store user data in local storage
        },
        // Action to handle user logout
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user"); // Remove user data from local storage
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
