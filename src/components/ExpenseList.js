import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpense from '../selectors/expenses';
const ExpenseList =(props)=>{
    return(<div>
       
        <h1>Expense List </h1>
        <h3>Here is expense list page</h3>
        <p>expense props: {props.expenses.length}</p>
        <p>name : {props.name}</p>
       
        {props.expenses.map((expense)=>{
                console.log('thisis expense',expense);
               // return <ExpenseListItem  key={expense.id} id={expense.id} amount={expense.amount} description={expense.description} createdAt={expense.createdAt}/>
               return <ExpenseListItem  key={expense.id} expense={expense}/>

        })}
    </div>
    )

}

const mapStateToProps=(state)=>{
  // console.log(state.expenses);
    return {
       expenses: getVisibleExpense(state.expenses,state.filters)
      // name : 'sue',
       //filtersStore:state.filters
    };
};
export default connect(mapStateToProps)(ExpenseList);