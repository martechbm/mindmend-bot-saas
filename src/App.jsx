import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ChatBot from "./pages/ChatBot";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import EmotionalStateDisplay from "./components/EmotionalStateDisplay";
import SecureLogViewer from "./components/SecureLogViewer";

const query_client = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={query_client}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <LanguageProvider>
                    <TooltipProvider>
                        <Toaster />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<Dashboard />} />
                                    <Route path="register" element={<Register />} />
                                    <Route path="login" element={<Login />} />
                                    <Route path="chatbot" element={<ChatBot />} />
                                    <Route path="profile" element={<Profile />} />
                                    <Route path="emotional-state" element={<EmotionalStateDisplay />} />
                                    <Route path="secure-logs" element={<SecureLogViewer />} />
                                    <Route path="*" element={<NotFound />} />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </TooltipProvider>
                </LanguageProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;