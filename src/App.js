import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {id:'e1', title: 'Electricity Bill',   amount: 650,  date: new Date(2020, 7, 14)},
  {id:'e2', title: 'Bike License',       amount: 1500, date: new Date(2021, 2, 12)},
  {id:'e3', title: 'New Shoes',          amount: 2500, date: new Date(2019, 3, 28)},
  {id:'e4', title: 'Travelling',         amount: 5000, date: new Date(2021, 5, 12)},
]; 

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses); 

      function addExpenseHandler(expense) {
        setExpenses(
          (prevExpenses) => {return[expense, ...prevExpenses]}
        ); 
      };
    
      return (    
        <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses items={expenses}/>
        </div> 
      );
}; 
 
export default App;