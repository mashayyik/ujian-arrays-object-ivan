const { employees } = require("./database");
let totalSalary = 0;

function getBudgetMDev(budget) {
	for (let j = 0; j < budget.length; j++) {
		if (employees[j].department == "Development") {
			totalSalary += employees[j].salary;
		}
	}
	return totalSalary;
}

console.log(getBudgetMDev(employees));

module.exports = {
	getBudgetMDev,
};