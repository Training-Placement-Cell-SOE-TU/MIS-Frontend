import { Redirect } from "react-router-dom";

export default function AdminLogout(){
    localStorage.removeItem('admin-access-token');
    localStorage.removeItem('admin-username');
    return (
        <Redirect to="/admin/" />
    )
}