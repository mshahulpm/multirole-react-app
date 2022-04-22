import { ReactNode } from "react"
import { Navigate } from "react-router-dom"




type props = {
    children: ReactNode
    ROLE: string

}

export default function RoleGuard({ children, ROLE }: props) {

    const role = localStorage.getItem('role')


    return role === ROLE ? <>{children}</> : <Navigate to='/' />
}


