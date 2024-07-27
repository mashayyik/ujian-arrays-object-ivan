const { employees } = require("./database");
let maxSalary = 0;
let name = "";

function getHighestSalaryDev(salary) {
	for (let g = 0; g < salary.length; g++) {
		if (
			employees[g].department == "Development" &&
			maxSalary < employees[g].salary
		) {
			maxSalary = employees[g].salary;
			name = employees[g].name;
		}
		
	}
	return name;
}

console.log(getHighestSalaryDev(employees));

module.exports = {
	getHighestSalaryDev,
};
