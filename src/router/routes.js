/* eslint-disable */
import WebContentLayout from "../components/layout/webContentLayout.js"
import notFound from "../components/notFound.js"
const routes = [
    {
        path: "/",
        exact:true,
        component: WebContentLayout
    },
    {
        path: "*",
        component: notFound
    }

]
export default routes;