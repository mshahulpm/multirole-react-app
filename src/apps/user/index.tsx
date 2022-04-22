import {
    Link
} from "react-router-dom";


export default function UserApp() {

    return (
        <div>
            <h1>User Home</h1>
            <Link to="/user/page1">Page 1</Link>
            <Link to="/user/page2">Page 2</Link>
        </div>
    )
}


export function UserPage1() {

    return (
        <div>
            <h1>User Page 1</h1>
            <Link to="/user/page2">Go to Page 2</Link><br />
            <Link to='/user'>user Home</Link>
        </div>
    )
}


export function UserPage2() {

    return (
        <div>
            <h1>User Page 2</h1>
            <Link to="/user/page1">Go to Page 1</Link><br />
            <Link to='/user'>user Home</Link>
        </div>
    )
}