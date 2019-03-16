import React from 'react';



//export stateless component

const ExpenseListItem=(props)=>{
    console.log(props.description);
    //console.log(props.mappingExpenses);
    //const {description, amount, createdAt } = props.mappingExpenses;
    return(
        <div>
            <p>id : {props.expense.id}</p>
           <p>description : {props.expense.description}</p>
           {/* <p> amount : {props.amount}</p>
           <p> createdAt : {props.createdAt}</p> */}
        
        </div>
    )

}

//render description, amount, createdAt

export default ExpenseListItem;