import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => {
    return (
        <div>
        DashboardPagae
        <ExpenseListFilters/> 
         <ExpenseList/>
          
        </div>
    );
}

export default ExpenseDashboardPage;