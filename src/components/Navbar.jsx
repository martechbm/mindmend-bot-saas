import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Navbar = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <nav className="bg-secondary">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">{t.welcome}</Link>
                <div className="flex items-center space-x-4">
                    <Link to="/"><Button variant="ghost">{t.dashboard}</Button></Link>
                    <Link to="/chatbot"><Button variant="ghost">{t.chatbot}</Button></Link>
                    <Link to="/profile"><Button variant="ghost">{t.profile}</Button></Link>
                    <Link to="/login"><Button variant="outline">{t.login}</Button></Link>
                    <Link to="/register"><Button>{t.register}</Button></Link>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;