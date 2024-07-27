const { employees } = require("./database");


function getBudgetMDev(budget) {
	let totalSalary = 0;
	for (let j = 0; j < budget.length; j++) {
		if (employees[j].department == "Development") {
			totalSalary += employees[j].salary;
		}
	}
	return totalSalary;
}

const getBudetDevWithBuildInFunction = (arraysOfEmplyees) => {
	let totalSallaryDev = 0
	employees.forEach(employee => {
		if(employee.department == "Development") {
			totalSallaryDev += employee.salary;
		}
	})
	return totalSallaryDev;
}






module.exports = {
	getBudgetMDev,getBudetDevWithBuildInFunction
};