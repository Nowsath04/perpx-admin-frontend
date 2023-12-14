import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        loading: false,
    },
    reducers: {

        blogCreateLoading(state, action) {
            return {

                loading: true
            }
        },
        blogCreateSuccess(state, action) {
            return {
                loading: false,
                blog: action.payload.blog,


            }
        },
        blogCreatefail(state, action) {
            return {
                loading: false,
                error: action.payload,

            }
        },
        AllblogLoading(state, action) {
            return {

                loading: true
            }
        },
        AllblogSuccess(state, action) {
            return {
                loading: false,
                allBlog: action.payload.allBlog,
            }
        },
        Allblogfail(state, action) {
            return {
                loading: false,
                error: action.payload,

            }
        },
        GetSingleblogLoading(state, action) {
            return {

                loading: true
            }
        },
        GetSingleblogSuccess(state, action) {
            return {
                loading: false,
                Singleblog: action.payload.singleBlog,
            }
        },
        GetSingleblogfail(state, action) {
            return {
                loading: false,
                error: action.payload,

            }
        },

        UpdateblogCreateLoading(state, action) {
            return {

                loading: true
            }
        },
        UpdateblogCreateSuccess(state, action) {
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

        DeleteBlogLoading(state, action) {
            return {

                loading: true
            }
        },
        DeleteBlogSuccess(state, action) {
            return {
                loading: false,
                blog: action.payload.blog,


            }
        },
        DeleteBlogFail(state, action) {
            return {
                loading: false,
                error: action.payload,

            }
        },
        

    }
})

const { actions, reducer } = blogSlice

export const { blogCreateLoading, blogCreateSuccess, blogCreatefail, AllblogLoading,
     AllblogSuccess, Allblogfail, GetSingleblogLoading, GetSingleblogSuccess,
      GetSingleblogfail,UpdateblogCreateLoading,UpdateblogCreateSuccess,UpdateblogCreatefail,DeleteBlogLoading,DeleteBlogSuccess,DeleteBlogFail } = actions

export default reducer