import React from 'react';
import {connect} from 'react-redux';
const ExpenseList =(props)=>{
    return(<div>
       
        <h1>Expense List </h1>
        {props.name}
    </div>
    )

}

const ConnectedExpenseList = connect()(ExpenseList);
    return{
        name : 'Andrew'

    }

export default ExpenseList;