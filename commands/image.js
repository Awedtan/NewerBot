module.exports = {
	name: 'image',
	alias: 'img',
	description: 'Displays an image',
	examples: ['image gru'],

	async run(msg) {
		const args = msg.content.toLowerCase().split(" ");

		if (msg.content.toLowerCase().match("gru")) {
			console.log("gru");
			msg.channel.send({ files: [`./images/gru${Math.ceil(Math.random() * 2)}.png`] });
		}
		if (msg.content.toLowerCase().match("aaa")) {
			console.log("aaa");
			msg.channel.send({ files: ["./images/aaa.jpg"] });
		}
		if (msg.content.toLowerCase().match("aditya") || msg.content.toLowerCase().match("deet")) {
			console.log("aditya");
			msg.channel.send({ files: [`./images/aditya${Math.ceil(Math.random() * 2)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("andrew")) {
			console.log("andrew");
			msg.channel.send({ files: [`./images/andrew${Math.ceil(Math.random() * 3)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("batman")) {
			console.log("batman");
			msg.channel.send({ files: ["./images/batman.jpg"] });
		}
		if (msg.content.toLowerCase().match("boys")) {
			console.log("boys");
			msg.channel.send({ files: ["./images/boys.jpg"] });
		}
		if (msg.content.toLowerCase().match("bruh")) {
			console.log("bruh");
			msg.channel.send({ files: ["./images/bruh.jpg"] });
		}
		if (msg.content.toLowerCase().match("connor") || msg.content.toLowerCase().match("conner")) {
			console.log("connor");
			msg.channel.send({ files: ["./images/connor.jpg"] });
		}
		if (msg.content.toLowerCase().match("cool")) {
			console.log("cool");
			msg.channel.send({ files: ["./images/cool.jpg"] });
		}
		if (msg.content.toLowerCase().match("dumb")) {
			console.log("dumb");
			msg.channel.send({ files: ["./images/dumb.jpg"] });
		}
		for (let i = 0; i < args.length; i++) {
			if (msg.content.toLowerCase().match("eat") || msg.content.toLowerCase().match("eating")) {
				console.log("eat");
				msg.channel.send({ files: ["./images/eat.jpg"] });
				break;
			}
		}
		if (msg.content.toLowerCase().match("eddy") || msg.content.toLowerCase().match("edward")) {
			console.log("edward");
			msg.channel.send({ files: [`./images/edward${Math.ceil(Math.random() * 8)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("elephant")) {
			console.log("elephant");
			msg.channel.send({ files: ["./images/elephant.jpg"] });
		}
		if (msg.content.toLowerCase().match("eric")) {
			console.log("eric");
			msg.channel.send({ files: [`./images/eric${Math.ceil(Math.random() * 6)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("fly")) {
			console.log("fly");
			msg.channel.send({ files: ["./images/fly.jpg"] });
		}
		if (msg.content.toLowerCase().match("gay") || msg.content.toLowerCase().match("furry")) {
			console.log("gay");
			msg.channel.send({ files: ["./images/gay.jpg"] });
		}
		if (msg.content.toLowerCase().match("god")) {
			console.log("god");
			msg.channel.send({ files: ["./images/god.jpg"] });
		}
		if (msg.content.toLowerCase().match("george") || msg.content.toLowerCase().match("jorge")) {
			console.log("george");
			msg.channel.send({ files: [`./images/george${Math.ceil(Math.random() * 3)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("janitor")) {
			console.log("janitor");
			msg.channel.send({ files: ["./images/janitor.jpg"] });
		}
		if (msg.content.toLowerCase().match("jesus")) {
			console.log("jesus");
			msg.channel.send({ files: ["./images/jesus.jpg"] });
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "jon" || msg.content.toLowerCase().match("jonathan") || msg.content.toLowerCase().match("jonny")) {
				console.log("jonathan");
				msg.channel.send({ files: [`./images/jonathan${Math.ceil(Math.random() * 4)}.jpg`] });
				break;
			}
		}
		if (msg.content.toLowerCase().match("leaves")) {
			console.log("leaves");
			msg.channel.send({ files: ["./images/leaves.jpg"] });
		}
		if (msg.content.toLowerCase().match("long")) {
			console.log("long");
			msg.channel.send({ files: [`./images/long${Math.ceil(Math.random() * 2)}.jpg`] });
		}
		for (let i = 0; i < args.length; i++) {
			if (msg.content.toLowerCase().match("mao") || msg.content.toLowerCase().match("zedong")) {
				console.log("mao zedong");
				msg.channel.send({ files: ["./images/mao.jpg"] });
				break;
			}
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "max" || msg.content.toLowerCase().match("maxy")) {
				console.log("max");
				msg.channel.send({ files: [`./images/max${Math.ceil(Math.random() * 4)}.jpg`] });
				break;
			}
		}
		if (msg.content.toLowerCase().match("bessie")) {
			console.log("mcbessie");
			msg.channel.send({ files: ["./images/mcbessie.jpg"] });
		}
		if (msg.content.toLowerCase().match("mistake")) {
			console.log("mistake");
			msg.channel.send({ files: ["./images/mistake.jpg"] });
		}
		if (msg.content.toLowerCase().match("nice")) {
			console.log("nice");
			msg.channel.send({ files: ["./images/nice.jpg"] });
		}
		if (msg.content.toLowerCase().match("patriot")) {
			console.log("patriot");
			msg.channel.send({ files: ["./images/patriot.jpg"] });
		}
		if (msg.content.toLowerCase().match("paul") || msg.content.toLowerCase().match("menacing")) {
			console.log("paul");
			msg.channel.send({ files: ["./images/paul.jpg"] });
		}
		if (msg.content.toLowerCase().match("richard") || msg.content.toLowerCase().match("ricard")) {
			console.log("richard");
			msg.channel.send({ files: [`./images/richard${Math.ceil(Math.random() * 3)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("ricky")) {
			console.log("ricky");
			msg.channel.send({ files: [`./images/ricky${Math.ceil(Math.random() * 2)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("sajon")) {
			console.log("sajon");
			msg.channel.send({ files: [`./images/sajon${Math.ceil(Math.random() * 6)}.jpg`] });
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "sam" || msg.content.toLowerCase().match("samuel")) {
				console.log("samuel");
				msg.channel.send({ files: [`./images/samuel${Math.ceil(Math.random() * 10)}.jpg`] });
				break;
			}
		}
		if (msg.content.toLowerCase().match("singhelp")) {
			console.log("singhelp");
			msg.channel.send({ files: ["./images/singhelp.jpg"] });
		}
		if (msg.content.toLowerCase().match("skeletor") || msg.content.toLowerCase().match("skull") || msg.content.toLowerCase().match("spook")) {
			console.log("skeletor");
			msg.channel.send({ files: ["./images/skeletor.jpg"] });
		}
		if (msg.content.toLowerCase().match("squad")) {
			console.log("squad");
			msg.channel.send({ files: ["./images/squad.jpg"] });
		}
		if (msg.content.toLowerCase().match("straw")) {
			console.log("straw");
			msg.channel.send({ files: [`./images/straw${Math.ceil(Math.random() * 2)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("stubby") || msg.content.toLowerCase().match("miranda") || msg.content.toLowerCase().match("sarah")) {
			console.log("stubby");
			msg.channel.send({ files: ["./images/stubby.jpg"] });
		}
		if (msg.content.toLowerCase().match("sword")) {
			console.log("sword");
			msg.channel.send({ files: ["./images/sword.jpg"] });
		}
		if (msg.content.toLowerCase().match("thonk")) {
			console.log("thonk");
			msg.channel.send({ files: ["./images/thonk.jpg"] });
		}
		if (msg.content.toLowerCase().match("toucan") || ((msg.content.toLowerCase().match("fruit") || msg.content.toLowerCase().match("froot")) && msg.content.toLowerCase().match("loop"))) {
			console.log("toucan");
			msg.channel.send({ files: ["./images/toucan.jpg"] });
		}
		if (msg.content.toLowerCase().match("trash")) {
			console.log("trash");
			msg.channel.send({ files: ["./images/trash.jpg"] });
		}
		if (msg.content.toLowerCase().match("vaseehar")) {
			console.log("vaseehar");
			msg.channel.send({ files: [`./images/vaseehar${Math.ceil(Math.random() * 2)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("vector")) {
			console.log("vector");
			msg.channel.send({ files: ["./images/vector.jpg"] });
		}
		if (msg.content.toLowerCase().match("william")) {
			console.log("william");
			msg.channel.send({ files: [`./images/william${Math.ceil(Math.random() * 5)}.jpg`] });
		}
		if (msg.content.toLowerCase().match("yah") && msg.content.toLowerCase().match("hai")) {
			console.log("yah hai");
			msg.channel.send({ files: ["./images/yahhai.jpg"] });
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "you") {
				console.log("you");
				msg.channel.send({ files: ["./images/you.jpg"] });
				break;
			}
		}
		if (msg.content.toLowerCase().match("zhen") || msg.content.toLowerCase().match("yang")) {
			console.log("zhenyang");
			msg.channel.send({ files: [`./images/zhenyang${Math.ceil(Math.random() * 2)}.jpg`] });
		}
	}
};