import types from '../types';

export const valueExpenseAction = value => ({
  type: types.ADD_VALUE_EXPENSE,
  payload: {
    amount: value,
  },
});

export const nameExpenseAction = deleteId => ({
  type: types.DELETE_EXPENSE,
  payload: {
    id: deleteId,
  },
});
