import axios from "axios";

let tokenData = null;

async function getToken() {
  if (tokenData && tokenData.expires_at > Date.now()) {
    return tokenData.access_token;
  }

  const response = await axios.post("https://osu.ppy.sh/oauth/token", {
    client_id: process.env.OSU_CLIENT_ID,
    client_secret: process.env.OSU_CLIENT_SECRET,
    grant_type: "client_credentials",
    scope: "public",
  });

  tokenData = {
    access_token: response.data.access_token,
    expires_at: Date.now() + response.data.expires_in * 1000,
  };

  return tokenData.access_token;
}

export default async function handler(req, res) {
  const { playerId } = req.query;

  if (!playerId) {
    return res.status(400).json({ error: "Player ID is required" });
  }

  try {
    const token = await getToken();
    const response = await axios.get(
      `https://osu.ppy.sh/api/v2/users/${playerId}/osu`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const playerData = response.data;

    res.status(200).json({
      id: playerData.id,
      username: playerData.username,
      global_rank: playerData.statistics?.global_rank || null,
      country_rank: playerData.statistics?.country_rank || null,
      avatar_url: playerData.avatar_url,
      country_code: playerData.country_code,
    });
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);

    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Player not found" });
    }

    res.status(500).json({ error: "Failed to fetch player data" });
  }
}
