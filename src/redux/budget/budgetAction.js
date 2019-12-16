import types from '../types';

const valueBudgetAction = value => ({
  type: types.TOTAL_BUDGET,
  payload: {
    amount: value,
  },
});

export default valueBudgetAction;
