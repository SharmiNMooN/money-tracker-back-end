


const { getAllExpenses } = require('./expense.controller');
const expenseModel = require('./expense.model');

module.exports = {
    async  createExpense(payload){
        return await expenseModel.create(payload);
    },
    async getAllExpenses(){
        return await expenseModel.find();
    }
}