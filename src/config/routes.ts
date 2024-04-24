import Home from "../pages/Home";
import Apply from "../pages/Apply";

interface RouteType {
    path: string,
    componenet: () => JSX.Element,
    name: string
}
const routes: RouteType[] = [
    {
        path: '',
        componenet: Home,
        name: "Home Screen",
    },
    {
        path: '/apply',
        componenet: Apply,
        name: "Apply"
    }
]

export default routes