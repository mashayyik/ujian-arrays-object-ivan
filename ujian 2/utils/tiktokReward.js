const { videos, listReward } = require("../dataSource/database");

let result = [];
videos.forEach((v) => {
	let penonton = 0;
	let point = 0;
    penonton = v.viewers
    let jamtayang = Math.floor((penonton * 52) / 3600)
    
	v.rewards.forEach((gift) => {
        let monet = ""
        let namaRewards = gift[0]
        let totalRewards = gift[1]
		let hadiahPerOrang = listReward.find(c => {
            return c.name == namaRewards
        });
        
        
        if (jamtayang > 12) {
            totalRewards * 750 
            monet = "YES"
        }else {totalRewards * 0 
            monet = "NO"}
            
            let totalPoint = totalRewards * hadiahPerOrang.point
            let duit = 0;
            if (monet == "YES"){
                duit = totalPoint * 750;
        }
                result.push({
                            nama: v.user,
                            judul: v.song,
                            jmTyng: jamtayang,
                            ads: totalPoint,
                            cek: monet,
                            uang: duit,
                        });
        
	});
    

});

console.table(result)
