export const getBudget = store => store.totalBudget;

export const getExpense = store => {
  return store.totalExpense.reduce(
    (acc, el) => Number(acc) + Number(el.amount),
    0,
  );
};

export const getExpenseAmount = store => {
  return getBudget(store) - getExpense(store);
};
