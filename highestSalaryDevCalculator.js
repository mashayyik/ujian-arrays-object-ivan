const {employees} = require("./database");


function getHighestSalaryDev(e) {
	let maxSalary = 0;
	let obj;
	for (let g = 0; g < e.length; g++) {
		if (
			e[g].department == "Development" &&
			maxSalary < e[g].salary
		) {
			maxSalary = e[g].salary;
			obj = e[g];
		}
		
	}
	return obj;
}

function getHighestSalaryDevWithBIF(e) {
	let maxSalary = 0;
	let obj;
	e.forEach(employee =>{
		if (employee.department == "Development" && maxSalary < employee.salary){
			maxSalary = employee.salary;
			obj = employee;
		}
	})
	return obj;
}



module.exports = {
	getHighestSalaryDev,getHighestSalaryDevWithBIF
};
