//contain all of the form,validation

import React from 'react';

class ExpenseForm extends React.Component{
    state = {
        description: '',
        note:'',
        amount:''
    };

onDescriptionChange=(e)=>{
   const description= e.target.value;
   this.setState(()=>({
    description:description
    //es6 shorten hands 
    //description 
   }))
}
onTextareaChange=(e)=>{
const note = e.target.value;
this.setState(()=>({
    note:note
}))
}    
onAmountChange=(e)=>{
    const amount = e.target.value;
    
    this.setState(()=>({

    }))
}
render(){
        return(
            <div>
                ExpenseForm
                <form>
                    <input type="text" 
                            placeholder="Description"
                            autoFocus
                            value={this.state.description} 
                            onChange={this.onDescriptionChange} />
                    <input type ="number" 
                            placeholder="Amount"
                            value ={this.state.amount}
                            onChange = {this.onAmountChange}
                            />
                    <textarea placeholder="Add a note for your expense(optional)"
                                value={this.state.note}
                                onChange={this.onTextareaChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }



}

export default ExpenseForm;