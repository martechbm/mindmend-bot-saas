import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LanguageSelector from "./LanguageSelector";

const Layout = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-end mb-4">
                    <LanguageSelector />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;