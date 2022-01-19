const { prefix, token } = require("./config.json");
const Discord = require('discord.js');
const fs = require('fs');
const say = require('say');

Discord.Structures.extend('Guild', Guild => {
	class TTSGuild extends Guild {
		constructor(client, data) {
			super(client, data);
			this.voiceData = {
				connection: null,
				dispatcher: null,
				voiceChannel: null,
				voice: 'David',
				queue: [],
				current: null
			};
		}
	}
	return TTSGuild;
});

const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.aliases = new Discord.Collection();
for (const command of client.commands.array()) {
	client.aliases.set(command.alias, command);
}

client.on('message', msg => {
	if (msg.author.bot) return;
	
	if(msg.content.toLowerCase() === 'welcome to the markville server!')
		msg.channel.send('https://www.cfshops.com/markville.html');

	if (msg.mentions.users.has("237769508444569603") || msg.mentions.users.has("691751687307657226"))
		return require('./commands/ping.js').run(msg, "237769508444569603");
	// if (msg.mentions.users.has("201126938092371969"))
	// 	return require('./commands/ping.js').run(msg, "201126938092371969");
	// if (msg.mentions.users.has("233685023042174976"))
	// 	return require('./commands/ping.js').run(msg, "233685023042174976");
	// if (msg.mentions.users.has("356605916470181899"))
	// 	return require('./commands/ping.js').run(msg, "356605916470181899");

	if (!msg.content.startsWith(prefix)) return;

	try {
		// console.log(msg);
		const command = msg.content.slice(prefix.length);
		const args = command.split(" ");
		const commandName = args.shift().toLowerCase();

		if (commandName == 'help')
			require('./commands/help.js').run(msg, args, client);
		else if (client.commands.has(commandName))
			client.commands.get(commandName).run(msg, args);
		else if (client.aliases.has(commandName))
			client.aliases.get(commandName).run(msg, args);
		else return;

		console.log(commandName);
		console.log(args);
	} catch (err) {
		msg.channel.send('😔 Something went wrong');
		console.log(err);
	}
});

client.on('ready', () => {
	say.getInstalledVoices((err, voices) => console.log(voices));
	client.user.setActivity('whats up');
	console.log(`newbot Ready!`);
});

client.login(token);