import {
    Link
} from "react-router-dom";


export default function AdminApp() {

    return (
        <div>
            <h1>Admin Home</h1>
            <Link to="/admin/page1">Page 1</Link>
            <Link to="/admin/page2">Page 2</Link>

        </div>
    )
}


export function AdminPage1() {

    return (
        <div>
            <h1>Admin Page 1</h1>
            <Link to="/admin/page2">Go to Page 2</Link>
        </div>
    )
}


export function AdminPage2() {

    return (
        <div>
            <h1>Admin Page 2</h1>
            <Link to="/admin/page1">Go to Page 1</Link>
        </div>
    )
}