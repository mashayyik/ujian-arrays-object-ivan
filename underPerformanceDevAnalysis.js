const { employees } = require("./database");
let name = "";
let kinerja = 0;

function getUnderPerformanceDev(performance) {
	for (let g = 0; g < performance.length; g++) {
		if (
			employees[g].department == "Development" &&
			kinerja < employees[g].performanceRating
		) {
			kinerja = employees[g].performanceRating
		}
	}
	return kinerja;
}

console.log(getUnderPerformanceDev(employees));
