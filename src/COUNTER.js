import React, { useState, useEffect } from "react";

const Counter = () => {
  
    const [count, setCount] = React.useState(0);
    
  
  

  const inc=() => {
    setCount(prevCount=>prevCount+1)
  
  }
  const dec=() => {
    setCount(prevCount=>prevCount-1)
  
  }
  
  
    
  
 
  

  return (
    <>
        <h1>Counter App</h1>

        <p>Count: {count}</p>
        
        
        <div>
          
        <button onClick={inc}>
        Increment
        </button>
        <button onClick={dec}>
        Decrement 
        </button>
        </div >
        
        
        
        
        
        
        
        
        </>
  );
};

export default Counter;