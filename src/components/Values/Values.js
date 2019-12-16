import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Value from '../Value/Value';
import * as expenseSelector from '../../redux/expense/expenseSelector';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = store => ({
  budget: expenseSelector.getBudget(store),
  expenses: expenseSelector.getExpense(store),
  balance: expenseSelector.getExpenseAmount(store),
});

export default connect(mapStateToProps)(Values);
