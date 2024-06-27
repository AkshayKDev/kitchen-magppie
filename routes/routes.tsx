import { Navigate, useRoutes } from 'react-router-dom'
import KitchenRoutes from '../app/kitchen/routes'
import CmsRoutes from '../app/cms/routes/routes'
import LandingPage from '../app/landing-page/LandingPage'

export default function Routes() {
    return useRoutes([
        KitchenRoutes,
        CmsRoutes(),
        {
            path: 'landing-page',
            element: <LandingPage />,
        },
        {
            path: '*',
            element: <Navigate to="/not-found" replace />,
        },

    ])
}
