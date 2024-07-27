const {employees} = require('./database.js')

const {getHighestSalaryDev,getHighestSalaryDevWithBIF } = require('./highestSalaryDevCalculator.js'); //boleh diubah jika beda
const {getBudgetMDev, getBudetDevWithBuildInFunction} = require('./budgetDevCalculator.js'); //boleh diubah jika beda
//const {getUnderPerformanceDev} = require('./underPerformanceDevAnalysis.js'); //boleh diubah jika beda

const highestSalaryDev = getHighestSalaryDev(employees); //boleh diubah jika beda
const budgetDev = getBudgetMDev(employees); //boleh diubah jika beda
//const underPerformanceDev = getUnderPerformanceDev(employees); //boleh diubah jika beda
const budgetDevWithBif = getBudetDevWithBuildInFunction()
const highestSalaryDevWithBIF = getHighestSalaryDevWithBIF(employees);
console.log({

    highestSalaryDev : highestSalaryDev.name,
    highestSalaryDevWithBIF : highestSalaryDevWithBIF.name,
    budgetDev,
    budgetDevWithBif
    //underPerformanceDev,
})

//!NOTE hanya boleh diubah penamaanya, buatlah fungsi secara modular