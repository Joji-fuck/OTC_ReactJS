import axios from 'axios';

let tokenData = null;
async function getToken() {
    if (tokenData && tokenData.expires_at > Date.now()) {
        return tokenData.access_token;
    }
    const response = await axios.post('https://osu.ppy.sh/oauth/token', {
        client_id: process.env.OSU_CLIENT_ID,
        client_secret: process.env.OSU_CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'public'
    });
    tokenData = {
        access_token: response.data.access_token,
        expires_at: Date.now() + response.data.expires_in * 1000,
    };
    return tokenData.access_token;
}

export default async function handler(req, res) {
    const { playerIds } = req.query;

    if (!playerIds) {
        return res.status(400).json({ error: 'Player IDs are required' });
    }

    const idsArray = playerIds.split(',');

    try {
        const token = await getToken();


        const playerPromises = idsArray.map(id =>
            axios.get(`https://osu.ppy.sh/api/v2/users/${id}/osu`, {
                headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' },
            })
        );


        const responses = await Promise.allSettled(playerPromises);

        const playersData = {};
        responses.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                const playerData = result.value.data;
                playersData[playerData.id] = {
                    id: playerData.id,
                    username: playerData.username,
                    global_rank: playerData.statistics?.global_rank || null,
                    country_rank: playerData.statistics?.country_rank || null,
                    avatar_url: playerData.avatar_url,
                    country_code: playerData.country_code,
                };
            } else {
                console.error(`Failed to fetch player with ID ${idsArray[index]}:`, result.reason.response?.data || result.reason.message);
            }
        });

        res.status(200).json(playersData);

    } catch (error) {
        console.error('API Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch players data' });
    }
}