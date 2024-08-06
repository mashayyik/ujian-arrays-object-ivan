const { videos, listReward } = require("../dataSource/database");

let result = [];
videos.forEach((v) => {
	let penonton = 0;
	let point = 0;
	penonton = v.viewers;
	let duit = 0;
	let totalPoint = 0;
	let jamtayang = Math.floor((penonton * 52) / 3600);
	let monet = "";

	v.rewards.forEach((gift) => {
		let namaRewards = gift[0];
		let totalRewards = gift[1];
		let hadiahPerOrang = listReward.find((c) => {
			return c.name == namaRewards;
		});

		if (jamtayang > 12) {
			totalRewards * 750;
			monet = "YES";
		} else {
			totalRewards * 0;
			monet = "NO";
		}

		if (monet == "YES") {
			duit += totalRewards * hadiahPerOrang.point * 750;
		}
		totalPoint += totalRewards * hadiahPerOrang.point;
	});
	result.push({
		nama: v.user,
		judul: v.song,
		jmTyng: jamtayang,
		ads: totalPoint,
		cek: monet,
		uang: duit,
	});
});

console.table(result);
