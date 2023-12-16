import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthReduce from "./slices/authSlices"
import Blog from "./slices/blogSlices"
import Page from "./slices/pageSlice"
const reducer=({
authReduce:AuthReduce,
blog:Blog,
page:Page
})


const store=configureStore({
    reducer,
    middleware:[thunk]
})

export default store