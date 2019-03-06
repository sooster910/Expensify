import { createStore } from 'redux'

//Action generators - functions that return action objects
//it returns action new object 
const incrementCount =({incrementBy=1}={})=>{
    return{
        type :'INCREMENT',
        incrementBy
    };
}

const decrementCount = ({decrementBy=1}={})=>{
    return{
        type :'DECREMENT',
        decrementBy 
    }

}

const setCount =({count})=>{
    return{
        type:'SET',
        count
    }
}
const resetCount =()=> {
    return{
        type :'RESET'
    }
}
//Reducers 
//1. reducers are pure function
//2. never change state or action
const countReducer = (state ={count :0},action)=>{
    switch(action.type){
        case 'INCREMENT': 
        //if action.incrementBy datatype is number, 
        //const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy:1  
        return {
            count:state.count+action.incrementBy
        };
        
        case 'DECREMENT' : 
       // const decrementBy = typeof action.decrementBy ==='number'? action.decrementBy :1 
        return{   
        count:state.count-action.decrementBy
        };

        case 'SET' : return{
            count:action.count
        }
        
        case 'RESET' : return{
            count:0 
        };
        default:
        return state;
    }

}



//create store track chaning of data over time 
//we have to pass a function in and in that function gets 
//called once right away.

const store = createStore(countReducer);
    
 

    // if(action.type ==='INCREMENT'){
    //    return {count:state.count+1};
    // }else if
    //     (action.type === 'DECREMENT'){
    //         return{
    //             count:state.count-1
    //         };
    //     }else{
    //         return state;
    //     }
   
 store.subscribe(()=>{

    console.log(store.getState());

 });



//run createStrore function agin!

// store.dispatch(
//     {
//         type:'INCREMENT',
//         incrementBy : 5
//     }); 

//handling incrementby with autogenerator how?
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount()); 

store.dispatch(decrementCount({decrementBy:3})); 

store.dispatch(resetCount());

//reset - set the count equal to zero

store.dispatch(setCount({count:101}));




    