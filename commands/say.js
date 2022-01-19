const tools = require('./tools.js');
const say = require('say');

module.exports = {
	name: 'say',
	alias: 's',
	description: 'TTSifies some text',
	examples: ['say hello world'],

	async run(msg, args) {
		if (!args) return msg.channel.send('There\'s nothing here');
		const voiceChannel = msg.member.voice.channel;
		if (!voiceChannel) return msg.channel.send('You need to be in a voice channel to use that');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return msg.channel.send('I don\'t have permission to speak in your voice channel');

		let text = [].concat(args).join(" ");
		// const punctuation = `\\\`/`;
		const punctuation = ``;
		for (let i = 0; i < text.length; i++)
			if (punctuation.indexOf(text.charAt(i)) != -1)
				text = text.substring(0, i) + text.substring(i + 1);

		let file = args[0] + Math.floor(Math.random() * 10000);
		for (let i = 0; i < file.length; i++)
			if (punctuation.indexOf(file.charAt(i)) != -1)
				file = file.substring(0, i) + file.substring(i + 1);

		say.export(text, `Microsoft ${msg.guild.voiceData.voice} Desktop`, 1, `audio/${file}.wav`, (err) => {
			if (err) {
				console.log(err);
				return;
			}
		});

		await new Promise(resolve => setTimeout(resolve, 1400));

		msg.guild.voiceData.queue.push(`audio/${file}.wav`);
		if (!msg.guild.voiceChannel)
			tools.joinChannel(msg);

		console.log(`Now saying: ${text}`);
	}
};