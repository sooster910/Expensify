//Get visible expense
const getVisibleExpenses =(addedExpense, {text, sortBy, startDate,endDate})=>{
 

    return addedExpense.filter((filterExpense)=>{
        const startDateMatch = typeof startDate!== 'number' || filterExpense.createdAt>=startDate;
        const endDateMatch =typeof endDate!=='number' || filterExpense.createdAt<=endDate;
        const textMatch= filterExpense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b)=>{
        if (sortBy ==='date'){
            //show most recent one first. 
            return a.createdAt < b.createdAt ? 1:-1 ;
        } else if(sortBy =='amount'){
            return a.amount < b.amount ? 1:-1;
        } 
        });
}

export default getVisibleExpenses;