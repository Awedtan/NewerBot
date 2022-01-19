const say = require('./say.js');
const owoify = require('owoify-js').default;

module.exports = {
	name: 'uwu',
	alias: 'u',
	description: 'OWOifies some text',
	examples: ['owo hello world'],

	run(msg, args) {
		
		let text = [].concat(args).join(" ");
		const punctuation = `\\\`/`;
		for (let i = 0; i < text.length; i++)
			if (punctuation.indexOf(text.charAt(i)) != -1)
				text = text.substring(0, i) + text.substring(i + 1);
		
		say.run(msg, owoify(text, 'uvu'));
	}
};