import types from '../types';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.TOTAL_BUDGET:
      return action.payload.amount;

    default:
      return state;
  }
};

export default budgetReducer;
