import React from 'react';

import {
    Form as BTForm,
    FormGroup,
    Input,
    Label,
    Col,
    Button
  } from 'reactstrap'
  
  const Form = ({handleName, handleAmount, handleOnSubmit, name, amount, clearExpenses}) => (
    <BTForm style={{ margin: 10 }} onSubmit={handleOnSubmit}>
        <FormGroup className="row">
            <Label for="exampleEmail" sm={2}>
              Name of Expense
            </Label>
            <Col sm={4}>
              <Input
                type="text"
                name="name"
                id="expenseName"
                placeholder="Name of expense?"
                onChange = {handleName}
                value={name}
              />
            </Col>
        </FormGroup>
        <FormGroup className="row">
            <Label for="exampleEmail" sm={2}>
              $ Amount
            </Label>
            <Col sm={4}>
              <Input
                type="number"
                name="amount"
                id="expenseAmount"
                placeholder="0.00"
                onChange={handleAmount}
                value={amount}
              />
            </Col>
        </FormGroup>
            <Button type="submit" color="primary">
              Add
            </Button>{' '}
            <Button type="submit" color="danger" onClick={clearExpenses}>
              Delete
            </Button>
    </BTForm>
  )

export default Form;