const fs = require('fs');

module.exports = {

	async joinChannel(msg) {

		const voiceChannel = msg.member.voice.channel;
		const voiceData = msg.guild.voiceData;
		voiceData.voiceChannel = voiceChannel;
		voiceData.connection = await voiceChannel.join();
		if (!voiceData.current && voiceData.queue.length > 0){
			this.playTTS(voiceData, voiceData.queue.shift());
		}
	},

	playTTS(voiceData, file) {
		if (!fs.existsSync(file)) return console.log('That file doesn\'t exist');

		voiceData.dispatcher = voiceData.connection
			.play(file, { highWaterMark: 64 })
			.on('finish', async () => {
				// fs.unlinkSync(file);
				if (voiceData.queue.length > 0) {
					await new Promise(resolve => setTimeout(resolve, 500));
					this.playTTS(voiceData, voiceData.queue.shift());
				}
				else {
					voiceData.current = null;
				}
			})
			.on('error', error => console.error(error));
		voiceData.current = file;
	},

	leaveChannel(msg) {
		msg.guild.voiceData.voiceChannel.leave();
		msg.guild.voiceData = { 
			connection: null, 
			dispatcher: null, 
			voiceChannel: null, 
			voice: msg.guild.voice, queue: [], 
			current: null };
	}
};