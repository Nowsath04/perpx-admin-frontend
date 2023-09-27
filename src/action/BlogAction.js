import axios from "axios"
import { AllblogLoading, AllblogSuccess, Allblogfail, GetSingleblogLoading, GetSingleblogSuccess, GetSingleblogfail, UpdateblogCreateLoading, UpdateblogCreateSuccess, blogCreateLoading, blogCreateSuccess, blogCreatefail } from "../slices/blogSlices"
import { toast } from "react-toastify"

const baseurl = "http://localhost:4000/api"
export const CreateNewBlogs = (blogdata) => async (dispatch) => {

    try {
        dispatch(blogCreateLoading())
        const { data } = await axios.post(`${baseurl}/blog/newblog`, blogdata, { withCredentials: true })
        dispatch(blogCreateSuccess(data))
        toast.success("blog created successfully", {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    } catch (error) {
        dispatch(blogCreatefail(error.response.data.message))
        toast.error(error.response.data.message, {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    }
}

export const Allblogs = async (dispatch) => {
    try {
        dispatch(AllblogLoading())
        const { data } = await axios.get(`${baseurl}/blog/allblog`)
        console.log();
        dispatch(AllblogSuccess(data))
    } catch (error) {
        dispatch(Allblogfail(error.response.data.message))
    }
}

export const GetsingleBlog = (blog) => async (dispatch) => {
    try {
        dispatch(GetSingleblogLoading())
        const { data } = await axios.get(`${baseurl}/blog/single-blog/${blog}`)
        dispatch(GetSingleblogSuccess(data))
    } catch (error) {
        dispatch(GetSingleblogfail(error.response.data.message))
        toast.error(error.response.data.message, {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    }

}
export const UpdateBlogs = (id,blogdata) => async (dispatch) => {

    try {
        dispatch(UpdateblogCreateLoading())
        const { data } = await axios.put(`${baseurl}/blog/single-blog/${id}`, blogdata, { withCredentials: true })
        dispatch(UpdateblogCreateSuccess(data))
        toast.success("blog created successfully", {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    } catch (error) {
        dispatch(blogCreatefail(error.response.data.message))
        toast.error(error.response.data.message, {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    }
}