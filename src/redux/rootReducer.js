import { combineReducers } from 'redux';
import budgetReducer from './budget/budgetReducer';
import expenseReducer from './expense/expenseReducer';

const rootReducer = combineReducers({
  totalBudget: budgetReducer,
  totalExpense: expenseReducer,
});

export default rootReducer;
