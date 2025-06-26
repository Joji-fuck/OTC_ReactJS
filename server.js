// server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: ".env.local" });

const app = express();
app.use(cors());
app.use(express.json());

console.log("API ключи загружены:", {
  clientId: process.env.VITE_OSU_CLIENT_ID ? "OK" : "ОТСУТСТВУЕТ",
  clientSecret: process.env.VITE_OSU_CLIENT_SECRET ? "OK" : "ОТСУТСТВУЕТ",
});

let tokenData = null;

async function getToken() {
  if (tokenData && tokenData.expires_at > Date.now()) {
    return tokenData.access_token;
  }

  try {
    console.log("Запрашиваю новый токен...");
    const response = await axios.post("https://osu.ppy.sh/oauth/token", {
      client_id: process.env.VITE_OSU_CLIENT_ID,
      client_secret: process.env.VITE_OSU_CLIENT_SECRET,
      grant_type: "client_credentials",
      scope: "public",
    });

    tokenData = {
      access_token: response.data.access_token,
      expires_at: Date.now() + response.data.expires_in * 1000,
    };

    console.log("Получен новый токен");
    return tokenData.access_token;
  } catch (error) {
    console.error(
      "Ошибка получения токена:",
      error.response?.data || error.message
    );
    throw error;
  }
}

app.get("/api/osu-player", async (req, res) => {
  const { playerId } = req.query;
  console.log(`Запрос данных для игрока ${playerId}`);

  if (!playerId) {
    console.log("Отсутствует ID игрока");
    return res.status(400).json({ error: "Player ID is required" });
  }

  try {
    const token = await getToken();
    console.log(`Выполняю запрос к osu! API для игрока ${playerId}`);
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
    console.log(`Получены данные для игрока ${playerData.username}`);

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
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API сервер запущен на порту ${PORT}`);
  console.log(
    `Тестовый URL: http://localhost:${PORT}/api/osu-player?playerId=124493`
  );
});
