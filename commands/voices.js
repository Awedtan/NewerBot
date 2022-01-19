const say = require('say');

module.exports = {
	name: 'voices',
	group: 'tts',
	memberName: 'voices',
	description: `Lists all the bot voices\n` +
		`\`David\` - American English\n` +
		`\`Zira\` - American English\n` +
		`\`Hazel\` - British English\n` +
		`\`Huihui\` - Chinese (Simplified)\n` +
		`\`Hanhan\` - Chinese (Traditional)\n` +
		`\`Hortense\` - French\n` +
		`\`Hedda\` - German\n` +
		`\`Elsa\` - Italian\n` +
		`\`Haruka\` - Japanese\n` +
		`\`Heami\` - Korean\n` +
		`\`Paulina\` - Polish\n` +
		`\`Maria\` - Portuguese\n` +
		`\`Irina\` - Russian\n` +
		`\`Helena\` - Spanish\n`,
	examples: ['voices'],

	async run(msg) {
		try {
			msg.channel.send(`\`David\` - American English\n` +
				`\`Zira\` - American English\n` +
				`\`Hazel\` - British English\n` +
				`\`Huihui\` - Chinese (Simplified)\n` +
				`\`Hanhan\` - Chinese (Traditional)\n` +
				`\`Hortense\` - French\n` +
				`\`Hedda\` - German\n` +
				`\`Elsa\` - Italian\n` +
				`\`Haruka\` - Japanese\n` +
				`\`Heami\` - Korean\n` +
				`\`Paulina\` - Polish\n` +
				`\`Maria\` - Portuguese\n` +
				`\`Irina\` - Russian\n` +
				`\`Helena\` - Spanish\n`
			);
			// say.getInstalledVoices((err, voices) => msg.channel.send(voices));
		} catch (err) {
			msg.channel.send('😔 Sorry, something went wrong');
			console.log(err);
		}
	}
};