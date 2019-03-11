//Higher Order Component(HOC) - A component that render another component 
// Reuse code 
//Render hijacking
//Prop manipulation
//abstract state
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>{
    return(
    <div>
    <h1>INFO</h1>
    <p>The info is : {props.info}</p>

    </div> 
    )
};

//create function
const withAdminWarning=(WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAdmin &&<p>this is private info</p> }
            <WrappedComponent {...props}/>
       </div>
    )
    
}
//requireAuthentication 

const requireAuthentication=(WrappedComponent)=>{
    return(props)=> (
        <div>
         
         {props.isAuthenticated ?  (<WrappedComponent {...props}/>)
         :
         (<p>please login first</p>)
         }
          </div>
    
        )

}


const AdminInfo=withAdminWarning(Info)
//const AuthInfo=requireAuthentication(Info)
ReactDOM.render(<AdminInfo isAuthenticated={true} info ="This is info "/>, document.getElementById('app'));