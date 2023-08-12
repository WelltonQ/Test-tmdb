import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

export function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home} /> 
            <Route path="/movie/:id" Component={Movie} /> 
        </Routes>
    )
}