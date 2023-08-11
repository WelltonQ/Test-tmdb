import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

export function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home} /> 
            <Route path="/details" Component={Details} /> 
        </Routes>
    )
}