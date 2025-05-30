import ProtectedLayout from '@/layouts/ProtectedLayout'
import ProtectedRoute from './ProtectedRoutes'

const AllRoutes = [
    {
        path:'/',
        element:<ProtectedLayout/>,
        children:ProtectedRoute
    }
]

export default AllRoutes