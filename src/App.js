
import logo from "./logo.svg";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./App.css";
import { useEffect, useReducer, useState } from "react";

const axios = require('axios');

const red=(state,{type,payload,pay})=>{

  switch(type){

	case "add":
    
	  {
		  console.log(payload,pay)

		axios.post('http://localhost:3000/users', {
   
       user:payload,
       password:pay,
    
}).then(resp => {
	return "wow"
   
}).catch(error => {

  return "error"

   
});

	  }

  }

}


  function Usefetch(){
       
	
	// const [error,seterror]=useState(false)
	  
	const [ho,setjo]=useState([])
	const [loading,setloading]=useState(false)
    
	  
  useEffect(() => {
	setloading(true)
	fetch("http://localhost:3000/users").then(res => res.json()).then(result =>{
		
	setjo([...ho,result])})

	 
	 setloading(false)
            
      
  }, []) 
  
  
 return {ho,loading}
}

function App() {
	const [list,name]=useState('')

	const {loading,ho}=Usefetch()

	const [user,setuser]=useState('')
	const [pass,setpass]=useState('')
   
	const [state,dispatch]=useReducer(red,{pay:user,pass})
  
	 console.log(ho)

    

	  return loading?(
            <h1>...loading</h1>
	  )
	  
	 
	: (<>
		<div className="App">
		  <div className="boxall">
		<TextField className='inp' onChange={(e)=>setuser(e.target.value)} style={{width:"80%",marginBottom:"40px"}} id="filled-basic"  placeholder="username" variant="filled" /> 
		<TextField className='inp' onChange={(e)=>setpass(e.target.value)} style={{width:"80%",marginBottom:"40px"}} id="filled-basic"  placeholder="password" variant="filled" />
		<Button style={{margin:"20px"}} onClick={()=> dispatch({type:"add",payload:user,pay:pass}) } variant="contained">submit</Button>
		</div>
		</div>

	
		
		
		</>
	);
}

export default App;
