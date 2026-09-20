const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Atlas bot aktif!');
});

app.listen(port, () => {
  console.log(`Web sunucusu ${port} portunda çalışıyor.`);
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Giriş yapıldı: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);
