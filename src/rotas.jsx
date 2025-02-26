import { createBrowserRouter } from "react-router-dom";

import Ola from "./pages/ola";
import OutraPagina from "./pages/OutraPagina";

const rota = createBrowserRouter([
    {
        path: '/',
        element: <Ola/>
    },{
        path: '/op',
        element: <OutraPagina/>
    }
])

export default rota