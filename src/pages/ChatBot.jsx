import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { fetchEmotionalState } from "../utils/emotionalStateApi";

/**
 * ChatBot component for interacting with the AI therapist
 * @returns {React.Component} The ChatBot component
 */
const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [user_input, setUserInput] = useState("");

    const { data: emotional_state, isLoading, error } = useQuery({
        queryKey: ['emotionalState'],
        queryFn: fetchEmotionalState,
        enabled: messages.length > 0,
    });

    /**
     * Handles sending a message to the AI
     */
    const handleSend = async () => {
        if (user_input.trim() === "") return;

        const user_message = { role: "user", content: user_input };
        setMessages([...messages, user_message]);
        setUserInput("");

        // TODO: Implement actual API call to Claude 3.5
        const bot_response = { 
            role: "assistant", 
            content: "This is a mock response from the AI. In a real implementation, this would be the response from Claude 3.5." 
        };
        setMessages((prevMessages) => [...prevMessages, bot_response]);
    };

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col">
            <h1 className="text-3xl font-bold mb-4">AI Chatbot</h1>
            <ScrollArea className="flex-grow mb-4 p-4 border rounded-md">
                {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                        <div className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                            {message.content}
                        </div>
                    </div>
                ))}
            </ScrollArea>
            {isLoading && <p>Analyzing emotional state...</p>}
            {error && <p>Error analyzing emotional state</p>}
            {emotional_state && <p>Current emotional state: {emotional_state}</p>}
            <div className="flex space-x-2">
                <Input
                    value={user_input}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message here..."
                />
                <Button onClick={handleSend}>Send</Button>
            </div>
        </div>
    );
};

export default ChatBot;