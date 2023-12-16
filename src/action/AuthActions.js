import axios from "axios"
import { AuthError, AuthRegister, AuthRequest, Authsuccess, LoadinUserError, LoadingUserRequest, LoadingUserSucccess, RegisterError, RegisterRequest, UserLogoutError, UserLogoutsuccess, clearError } from "../slices/authSlices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

// const baseurl = "https://perpx.onrender.com/api"
const baseurl= "http://localhost:4000/api"
// const baseurl= "https://perpx.finance/adminfunc/api"


export const login = (data1) => async (dispatch) => {

    try {
        dispatch(AuthRequest())
        const { data } = await axios.post(`${baseurl}/auth/login`, data1,{ withCredentials: true })
        dispatch(Authsuccess(data))
        toast.success("login successfull")
    } catch (error) {
        dispatch(AuthError(error.response.data.message))
    }

}

export const userRegister = (userdata) => async (dispatch) => {
    try {
        dispatch(RegisterRequest())
        const { data } = await axios.post(`${baseurl}/auth/register`,userdata)
        dispatch(AuthRegister(data))
        toast.success("register successfull")
    } catch (error) {
        dispatch(RegisterError(error.response.data.message))
    }
}

export const ClearAuthError=(dispatch)=>{
    dispatch(clearError())
}
    
export const LoadingUser =async (dispatch) => {
    try {
        dispatch(LoadingUserRequest())
        const { data } = await axios.get(`${baseurl}/auth/myprofile`,{ withCredentials: true })
        dispatch(LoadingUserSucccess(data))
    } catch (error) {
        dispatch(LoadinUserError(error.response ?error.response.data.message :"Server error"))
    }
}


export const userLogout =async (dispatch) => {
    try {
       
     await axios.get(`${baseurl}/auth/logout`,{ withCredentials: true })
        dispatch(UserLogoutsuccess())
    
        toast.success("logout succesfull")
    } catch (error) {
        dispatch(UserLogoutError(error.response.data.message))
    }
}
