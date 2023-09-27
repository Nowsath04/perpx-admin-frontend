import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthReduce from "./slices/authSlices"
import Blog from "./slices/blogSlices"
const reducer=({
authReduce:AuthReduce,
blog:Blog
})


const store=configureStore({
    reducer,
    middleware:[thunk]
})

export default store