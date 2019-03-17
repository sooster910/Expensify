import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
 
const now = moment();
console.log(now.format("MMM Do, YYYY"));
console.log(now)

class ExpenseForm extends React.Component{
    
    state = {
        description: '',
        note:'',
        amount:'',
        createdAt:moment(),
        calendarFocused:false,
        Message:''
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
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
    this.setState(()=>({
        amount:amount
    }));
}
};
onDateChange=(createdAt)=>{
    this.setState(()=>({
        createdAt:createdAt
    }));
}

onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

onSubmit =(e)=>{
     e.preventDefault();
  if(!this.state.description || !this.state.amount){
      //set error state equal to please provide deasckription amount 
      this.setState(()=>({
          Message:'please input description and amount'
      }))
  }else{
    
      this.setState(()=>({
          Message:'' 
      }))
  }
    }
render(){
  
        return(
            <div>
                ExpenseForm
                {this.state.Message && <p>{this.state.Message}</p> }
                <form onSubmit ={this.onSubmit}>
                    <input type="text" 
                            placeholder="Description"
                            autoFocus
                            value={this.state.description} 
                            onChange={this.onDescriptionChange} />
                    <input type ="number" 
                            placeholder="Amount"
                            value ={this.state.amount}
                            onChange = {this.onAmountChange}
                            numberofmonths={1}
                            isOutsideRange={()=>false}
                            />
                    <SingleDatePicker   
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}

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