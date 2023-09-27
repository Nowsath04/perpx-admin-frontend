import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectRouter({children}){

    const {isAuthentication}=useSelector((select)=>select.authReduce)

    if(!isAuthentication){
        return <Navigate to="/"/>
    }

    return children
}