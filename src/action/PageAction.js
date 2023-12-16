import axios from "axios"
import { toast } from "react-toastify"
import {UpdateblogCreatefail,UpdatepageCreateLoading,UpdatepageCreateSuccess,GetSinglepageLoading,GetSinglepageSuccess,GetSinglepagefail,pageCreateLoading, pageCreateSuccess, pageCreatefail,AllpageLoading, AllpageSuccess, Allpagefail} from "../slices/pageSlice"


// const baseurl = "https://perpx.onrender.com/api"
const baseurl= "http://localhost:4000/api"
// const baseurl= "https://perpx.finance/adminfunc/api"

export const CreateNewPages = (Pagedata) => async (dispatch) => {
    try {
        dispatch(pageCreateLoading())
        const { data } = await axios.post(`${baseurl}/page/newpage`, Pagedata, { withCredentials: true })
        dispatch(pageCreateSuccess(data))
        toast.success("page created successfully", {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    } catch (error) {
        dispatch(pageCreatefail(error.response.data.message))
        toast.error(error.response.data.message, {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    }
}


export const AllPages = async (dispatch) => {
    try {
        dispatch(AllpageLoading())
        const { data } = await axios.get(`${baseurl}/page/allpage`)
        console.log(data);
        dispatch(AllpageSuccess(data))
    } catch (error) {
        dispatch(Allpagefail(error.response.data.message))
    }
}


export const GetsinglePage = (page) => async (dispatch) => {
    try {
        dispatch(GetSinglepageLoading())
        const { data } = await axios.get(`${baseurl}/page/single-page/${page}`)
        dispatch(GetSinglepageSuccess(data))
    } catch (error) {
        dispatch(GetSinglepagefail(error.response.data.message))
        toast.error(error.response.data.message, {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    }
}

export const UpdatePages = (id,pagedata) => async (dispatch) => {
    try {
        dispatch(UpdatepageCreateLoading())
        const { data } = await axios.put(`${baseurl}/page/single-page/${id}`, pagedata, { withCredentials: true })
        dispatch(UpdatepageCreateSuccess(data))
        toast.success("blog updated", {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    } catch (error) {
        dispatch(UpdateblogCreatefail(error.response.data.message))
        toast.error(error.response.data.message, {
            position: (toast.POSITION.BOTTOM_CENTER)
        })
    }
}