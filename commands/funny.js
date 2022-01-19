// /* eslint-disable no-undef */
// const speech = require('@google-cloud/speech');
// const tools = require('./tools.js');

// module.exports = {
// 	name: 'funny',
// 	alias: 'f',
// 	description: 'funni',
// 	examples: ['funny'],

// 	async run(msg, args) {
// 		if (!args) return msg.channel.send('There\'s nothing here');
// 		const voiceChannel = msg.member.voice.channel;
// 		if (!voiceChannel) return msg.channel.send('You need to be in a voice channel to use that');
// 		const permissions = voiceChannel.permissionsFor(msg.client.user);
// 		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return msg.channel.send('I don\'t have permission to speak in your voice channel');

// 		// if (!msg.guild.voiceChannel)
// 		tools.joinChannel(msg);

// 		await new Promise(resolve => setTimeout(resolve, 1000));
// 		speak_impl(msg.guild.voiceData, msg);
// 	}
// };

// const gspeechclient = new speech.SpeechClient({
// 	keyFilename: 'google.json'
// });

// function speak_impl(voiceData, msg) {
// 	voiceData.connection.on('speaking', async (user, speaking) => {
// 		if (speaking.bitfield == 0 || user.bot || user.username === 'bitter nightmares' || user.username === 'Cat' || user.username === 'LiquidCloud' || user.username === 'ùwú umbrellabird') {
// 			return;
// 		}

// 		// console.log(`Listening to ${user.username}`);

// 		const audioStream = voiceData.connection.receiver.createStream(user, { mode: 'pcm' });
// 		let buffer = [];

// 		audioStream.on('error', (e) => {
// 			console.log(user.username + ' audioStream: ' + e);
// 		});
// 		audioStream.on('data', (data) => {
// 			buffer.push(data);
// 		});
// 		audioStream.on('end', async () => {
// 			buffer = Buffer.concat(buffer);
// 			// const duration = buffer.length / 48000 / 4;

// 			// console.log("duration: " + duration);

// 			try {
// 				let new_buffer = await convert_audio(buffer)
// 				let aaa = await (await transcribe(new_buffer)).toLowerCase();
// 				let out = aaa.split(' ');

// 				// console.log(out);

// 				if (out.includes("imposter"))
// 					tools.playTTS(voiceData, 'audio/funny/imposter.mp3');
// 				else if (out.includes("suspicious") || out.includes("auspicious") || out.includes("sauce"))
// 					tools.playTTS(voiceData, 'audio/funny/sus.mp3');
// 				else if (out.includes("Among") && out.indexOf("Us") == out.indexOf("Among") + 1)
// 					tools.playTTS(voiceData, 'audio/funny/amogus.mp3');
// 				else if (out.includes("emergency") && out.indexOf("meeting") == out.indexOf("emergency") + 1)
// 					tools.playTTS(voiceData, 'audio/funny/emergency.mp3');
// 				else if (out.includes("kill"))
// 					tools.playTTS(voiceData, 'audio/funny/kill.mp3');
// 				else if (out.includes("eject") || out.includes("ejected"))
// 					tools.playTTS(voiceData, 'audio/funny/eject.mp3');
// 				else if (out.includes("chinese"))
// 					tools.playTTS(voiceData, 'audio/funny/chinese.mp3');
// 				else if (out.includes("pick") && out.includes("up") && out.includes("can"))
// 					tools.playTTS(voiceData, 'audio/funny/nofuckoff.mp3');
// 				else if (out.includes("monkey"))
// 					tools.playTTS(voiceData, 'audio/funny/monke.mp3');
// 				else if(out.includes("begone") || (out.includes("fuck") && out.includes("off")))
// 					tools.leaveChannel(msg);
// 				else
// 					return;

// 				console.log(aaa);

// 			} catch (e) {
// 				console.log('tmpraw rename: ' + e);
// 			}
// 		});
// 	});
// }

// async function transcribe(buffer) {
// 	try {

// 		// console.log('transcribe_gspeech');

// 		const bytes = buffer.toString('base64');
// 		const audio = {
// 			content: bytes,
// 		};
// 		const config = {
// 			encoding: 'LINEAR16',
// 			sampleRateHertz: 48000,
// 			languageCode: 'en-US',  // https://cloud.google.com/speech-to-text/docs/languages
// 		};
// 		const request = {
// 			audio: audio,
// 			config: config,
// 		};

// 		const [response] = await gspeechclient.recognize(request);
// 		const transcription = response.results
// 			.map(result => result.alternatives[0].transcript)
// 			.join('\n');

// 		// console.log(`gspeech: ${transcription}`);

// 		return transcription;

// 	} catch (e) {
// 		console.log('transcribe_gspeech 368:' + e);
// 	}
// }

// async function convert_audio(input) {
// 	try {
// 		// stereo to mono channel
// 		const data = new Int16Array(input)
// 		const ndata = new Int16Array(data.length / 2)
// 		for (let i = 0, j = 0; i < data.length; i += 4) {
// 			ndata[j++] = data[i]
// 			ndata[j++] = data[i + 1]
// 		}
// 		return Buffer.from(ndata);
// 	} catch (e) {
// 		console.log(e)
// 		console.log('convert_audio: ' + e)
// 		throw e;
// 	}
// }