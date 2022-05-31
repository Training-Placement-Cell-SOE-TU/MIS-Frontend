import { Redirect } from "react-router-dom";

export default function AdminLogout(){
    localStorage.removeItem('admin-access-token');
    return (
        <Redirect to="/admin/" />
    )
}