import { createSlice } from "@reduxjs/toolkit";


const authsclice = createSlice({
    name: "auth",
    initialState: {
        isAuthentication: false,
        loading: false
    },
    reducers: {
        AuthRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        Authsuccess(state, action) {
            return {
                loading: false,
                isAuthentication: true,
                auth: action.payload.user
            }
        },
        AuthError(state, action) {
            return {
                loading: false,
                isAuthentication: false,
                error: action.payload
            }
        },
        RegisterRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        AuthRegister(state, action) {
            return {
                loading: false,
                isAuthentication: true,
                auth: action.payload.user
            }
        },
        RegisterError(state, action) {
            return {
                loading: false,
                isAuthentication: false,
                error: action.payload
            }
        },
        LoadingUserRequest(state, action) {
            return {
                ...state,
                isAuthentication: false,
                loading: true
            }
        },
        LoadingUserSucccess(state, action) {
            return {
                loading: false,
                isAuthentication: true,
                auth: action.payload.user
            }
        },
        LoadinUserError(state, action) {
            return {
                loading: false,
                isAuthentication: false,
                error: action.payload
            }
        },

        UserLogoutsuccess(state, action) {
            return {
                isAuthentication: false,
                loading: false
            }
        },
        UserLogoutError(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        }

    }
})

const { reducer, actions } = authsclice

export const { AuthError, AuthRequest, Authsuccess, AuthRegister, RegisterError,UserLogoutsuccess,UserLogoutError, RegisterRequest, clearError, LoadinUserError, LoadingUserRequest, LoadingUserSucccess } = actions

export default reducer