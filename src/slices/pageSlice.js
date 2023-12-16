import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        loading: false,
    },
    reducers: {

        pageCreateLoading(state, action) {
            return {
                loading: true
            }
        },
        pageCreateSuccess(state, action) {
            return {
                loading: false,
                page: action.payload.page,


            }
        },
        pageCreatefail(state, action) {
            return {
                loading: false,
                error: action.payload,
            }
        },
        AllpageLoading(state, action) {
            return {

                loading: true
            }
        },
        AllpageSuccess(state, action) {
            return {
                loading: false,
                allpage: action.payload.allpage,
            }
        },
        Allpagefail(state, action) {
            return {
                loading: false,
                error: action.payload,

            }
        }, 
        GetSinglepageLoading(state, action) {
            return {

                loading: true
            }
        },
        GetSinglepageSuccess(state, action) {
            return {
                loading: false,
                singlePage: action.payload.singlePage,
            }
        },
        GetSinglepagefail(state, action) {
            return {
                loading: false,
                error: action.payload,

            }
        },  
        UpdatepageCreateLoading(state, action) {
            return {

                loading: true
            }
        },
        UpdatepageCreateSuccess(state, action) {
            return {
                loading: false,
                blog: action.payload.blog,


            }
        },
        UpdateblogCreatefail(state, action) {
            return {
                loading: false,
                error: action.payload,

            }
        },
    }
})

const { actions, reducer } = pageSlice

export const { pageCreateLoading, pageCreateSuccess, pageCreatefail,
    AllpageLoading, AllpageSuccess, Allpagefail, GetSinglepageLoading,
     GetSinglepageSuccess, GetSinglepagefail,UpdatepageCreateLoading,
     UpdatepageCreateSuccess,UpdateblogCreatefail} = actions

export default reducer