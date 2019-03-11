import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import addExpense from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
// store.subscribe(() => {
//    console.log(store.getState());
//   });
  
//add expense
store.dispatch(addExpense({description:'water bill'}));
//add expense
store.dispatch(addExpense({description:'gas bill'}));

//setTextFilter
store.dispatch(setTextFilter('bill'));

//getVisibleExpenses 
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses , state.filters)
console.log(visibleExpenses);
//console.log(store.getState());

const jsx =(
    <Provider store ={store}>
    <AppRouter/>
   
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

