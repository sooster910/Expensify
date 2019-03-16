import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';


//export stateless component

const ExpenseListItem=(props)=>{
    console.log(props.description);
    //console.log(props.mappingExpenses);
    //const {description, amount, createdAt } = props.mappingExpenses;
    return(
        <div>
            <p>id : {props.expense.id}</p>
           <p>description : {props.expense.description}</p>
           <p> amount : {props.amount}</p>
           <p> createdAt : {props.createdAt}</p>
            
            <button onClick={()=>{
                props.dispatch(removeExpense({id:props.expense.id}));
               
            }}> Remove </button>


        </div>
    )

}

//render description, amount, createdAt

export default connect()(ExpenseListItem);