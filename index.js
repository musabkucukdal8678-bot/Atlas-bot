const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Atlas Bot 7/24 Aktif!');
});
app.listen(process.env.PORT || 3000, () => {
  console.log('Web sunucusu hazir.');
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Bot başarıyla giriş yaptı: ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);