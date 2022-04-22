import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { Logout } from "../common/components"




export default function Layout() {

    //  navbar 



    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', background: 'orange' }}>
                <h2>Admin</h2>
                <Li>one</Li>
                <Li>two</Li>
                <Li>
                    <Logout />
                </Li>
            </div>
            <Outlet />
        </>
    )
}

const liStyle = {
    listStyle: 'none',
    margin: '30px'
}

const Li = ({ children }: { children: ReactNode }) => <li style={liStyle}>{children}</li>