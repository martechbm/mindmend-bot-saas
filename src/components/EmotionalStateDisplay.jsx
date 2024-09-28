import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEmotionalState } from '../utils/emotionalStateApi';

/**
 * Component to display the user's emotional state
 * @returns {React.Component} The EmotionalStateDisplay component
 */
const EmotionalStateDisplay = () => {
    const { data: emotional_state, isLoading, error } = useQuery({
        queryKey: ['emotionalState'],
        queryFn: fetchEmotionalState,
    });

    if (isLoading) return <div>Analyzing emotional state...</div>;
    if (error) return <div>Error fetching emotional state</div>;

    return (
        <div className="p-4 bg-secondary rounded-lg">
            <h2 className="text-xl font-bold mb-2">Your Emotional State</h2>
            <p>{emotional_state}</p>
        </div>
    );
};

export default EmotionalStateDisplay;