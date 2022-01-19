module.exports = {
	name: 'voice',
	alias: 'v',
	description: 'Changes the TTS voice',
	examples: ['voice hazel', 'voice hortense'],

	async run(msg, args) {
		if (args.length == 0) {
			console.log(`Current voice: ${msg.guild.voiceData.voice}`);
			return msg.channel.send(`${msg.guild.voiceData.voice} is currently speaking`);
		}

		if (args.length == 1) {
			const voices = ["david", "zira", "hazel", "huihui", "hanhan", "hortense", "hedda", "elsa", "haruka", "heami", "paulina", "maria", "irina", "helena"];

			if (voices.includes(args[0].toLowerCase())) {
				msg.guild.voiceData.voice = args[0].toUpperCase().charAt(0) + args[0].substring(1);
				console.log(`Changed TTS voice to ${msg.guild.voiceData.voice}`);
				return msg.channel.send(`:+1: Changed TTS voice to ${msg.guild.voiceData.voice}`);
			}
			else {
				console.log(`Voice failure (invalid voice)`);
				return msg.channel.send(`:x: That's not a valid voice`);
			}
		}
		else {
			console.log(`Voice failure (invalid voice)`);
			return msg.channel.send(`:x: That's not a valid voice`);
		}
	}
};