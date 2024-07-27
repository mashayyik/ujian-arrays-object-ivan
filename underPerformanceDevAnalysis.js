const { employees } = require("./database");

let underPerformanceDev = []

// const arraysBaru = employees.sort((a, b)=>{
// 	return a.performanceRating - b.performanceRating;
// })
//
// const arrayTerfilter = arraysBaru.filter(employees =>{
// 	return employees.department == "Development"
// })
//
// for(let j = 0; j < 2; j++) {
// 	underPerformanceDev.push(arrayTerfilter[j].name)
// }

let arraysOfDevelopment = []
for(let i = 0; i <employees.length; i++){
	if(employees[i].department == "Development"){
		arraysOfDevelopment.push({
			nama: employees[i].name,
			department: employees[i].department,
			kpi : employees[i].performanceRating
		})
	}
}
// console.log(arraysOfDevelopment.length);
let sortedArrayDevelopment =[]
let temp = Number.MIN_VALUE;
for(let i = 0; i < arraysOfDevelopment.length; i++){
	if(temp < arraysOfDevelopment[i].kpi){
		temp = arraysOfDevelopment[i].kpi;
	}
}
console.log(temp)

//bonus


