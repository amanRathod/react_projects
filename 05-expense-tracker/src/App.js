
import React, { useState, useEffect } from 'react'
import { Jumbotron, Container  } from 'reactstrap'
import Logo from './logo.svg'
import Form from './components/Form'
import List from './components/List'


const All_Expense = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function App() {
  const [expenses, setExpenses] = useState(All_Expense);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleName = (e) => {
    console.log('Name ', e.target.value)
    setName(e.target.value);
  }

  const handleAmount = (e) => {
    console.log('Amount ', e.target.value)
    setAmount(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
      //check whether the name is not empty and the amount is not negative
    if (name !== '' && amount > 0) {
      // single expense object
      const expense = { name, amount };
      // do not override previous values in the array
      // use spread operator to access previous values
      setExpenses([...expenses, expense]);

      // clean input fields
      setName('');
      setAmount('');
    } else {
      console.log('Invalid expense name or the amount');
    }
  }

  const clearExpenses = () => {
    setExpenses([]);
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])


  return (
    <Container className="text-center">
    <Jumbotron fluid>
      <h3 className="display-6">
        Expense Tracker React App</h3>
        <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
      
      <div>
        <p>
          Total Expense:{' '}
          <span className="text-success">
            ${' '}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount))
            }, 0)}
          </span>
        </p>
      </div>
      <Form handleName={handleName} handleAmount={handleAmount}
        handleOnSubmit={handleOnSubmit}
        name={name} amount={amount} clearExpenses={clearExpenses}
       />
      <List expenses={expenses} />

    </Jumbotron>
  </Container>
  )
}

export default App