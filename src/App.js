import React from 'react';
import styled from 'styled-components';
// import shortid from 'shortid';
import BudgetForm from './components/BudgetForm/BudgetForm';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpensesTable from './components/ExpensesTable/ExpensesTable';
import Values from './components/Values/Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      <ExpensesTable />
    </Container>
  );
};

export default App;
