import { useState, useEffect, useCallback } from 'react';

export const useOsuPlayersList = (playerIds) => {
    const [players, setPlayers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPlayers = useCallback(async () => {
        if (!playerIds || playerIds.length === 0) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/osu-players-list?playerIds=${playerIds.join(',')}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch players');
            }

            const data = await response.json();
            setPlayers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [playerIds.join(',')]);
    useEffect(() => {
        fetchPlayers();
    }, [fetchPlayers]);

    return { players, loading, error, refetch: fetchPlayers };
};