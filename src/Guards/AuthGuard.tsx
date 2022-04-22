import { ReactNode } from "react"
import { Navigate } from "react-router-dom"




export default function AuthGuard({ children, }: { children: ReactNode, }) {


    const role = localStorage.getItem('role')
    return !!role === true ? <>{children}</> : <Navigate to='/' />
}