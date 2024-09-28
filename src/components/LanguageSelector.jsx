import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext } from '../contexts/LanguageContext';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
];

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Language:</span>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-secondary text-foreground rounded-md px-2 py-1 text-sm"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;