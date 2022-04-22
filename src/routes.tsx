import { Navigate, useRoutes, useLocation, Link } from 'react-router-dom';
import AdminApp, { AdminPage1, AdminPage2 } from './apps/admin';
import UserApp, { UserPage1, UserPage2 } from './apps/user';
import Login from './common/LoginPage';
import UserLayOut from './layout/user';
import AdminLayout from './layout/admin';
import RoleGuard from './Guards/RoleGuard';
import AuthGuard from './Guards/AuthGuard';




export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: 'user',
            element: <AuthGuard>
                <RoleGuard ROLE='user'>
                    <UserLayOut />
                </RoleGuard>
            </AuthGuard>,
            children: [
                { path: '', element: <UserApp /> },
                { path: 'page1', element: <UserPage1 /> },
                { path: 'page2', element: <UserPage2 /> },
            ]
        },
        {
            path: 'admin',
            element: <AuthGuard>
                <RoleGuard ROLE='admin'>
                    <AdminLayout />
                </RoleGuard>
            </AuthGuard>,
            children: [
                { path: '', element: <AdminApp /> },
                { path: 'page1', element: <AdminPage1 /> },
                { path: 'page2', element: <AdminPage2 /> },
            ]
        }
    ]);
}