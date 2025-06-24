import { useState, useEffect, useCallback } from 'react';

export const useOsuPlayer = (playerId) => {
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPlayer = useCallback(async () => {
        if (!playerId) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/osu-player?playerId=${playerId}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch player data');
            }

            const data = await response.json();
            setPlayer(data);
        } catch (err) {
            console.error('Error fetching player:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [playerId]);

    useEffect(() => {
        fetchPlayer();
    }, [fetchPlayer]);

    return { player, loading, error, refetch: fetchPlayer };
};