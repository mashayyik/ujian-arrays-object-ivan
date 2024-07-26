const {employees} = require('database')

const {getHighestSalaryDev} = require('./highestSalaryDevCalculator.js'); //boleh diubah jika beda
const {getBudgetMDev} = require('./budgetDevCalculator.js'); //boleh diubah jika beda
const {getUnderPerformanceDev} = require('./underPerformanceDevAnalysis.js'); //boleh diubah jika beda

const highestSalaryDev = getHighestSalaryDev(employees); //boleh diubah jika beda
const budgetDev = getBudgetMDev(employees); //boleh diubah jika beda
const underPerformanceDev = getUnderPerformanceDev(employees); //boleh diubah jika beda

console.log({
    highestSalaryDev,
    budgetDev,
    underPerformanceDev,
})

//!NOTE hanya boleh diubah penamaanya, buatlah fungsi secara modular