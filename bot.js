const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('ログインしました。');
});

client.on('message', (message) => {
	if (message.content.startsWith('!napoan')) {
		message.channel.send('ナポアン！'); // ここに指定した文字列がボットの発言になる
	}
});

client.login('##YOUR CLIENT KEY##');
