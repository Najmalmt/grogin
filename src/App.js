import { useSelector } from "react-redux";
import AppRoute from "./components/Routing/AppRoute";
import AuthRoute from "./components/Routing/AuthRoute";

function App() {
    const userVerfied = useSelector((state) => state.auth.user);
    return <>{userVerfied ? <AppRoute /> : <AuthRoute />}</>;
}

export default App;
