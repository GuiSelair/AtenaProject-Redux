import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";

export default function RoutesToPages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}