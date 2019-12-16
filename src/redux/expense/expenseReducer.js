import types from '../types';

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_VALUE_EXPENSE:
      return [...state, action.payload.amount];

    case types.DELETE_EXPENSE:
      return state.filter(el => el.id !== action.payload.id);

    default:
      return state;
  }
};

export default expenseReducer;
