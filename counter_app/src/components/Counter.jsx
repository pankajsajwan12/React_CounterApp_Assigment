import React, { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);


    return (
        <div>
           <h3 style={{color :count%2===0 ? "red" : "green" }}>Count : {count}</h3>            <button onClick={()=> setCount(count +1)}>increment</button>
            <button onClick={() => setCount(count -1)}>decrement</button>
            <button onClick={()=> setCount (count *2)}>double</button>
        </div>
    )
}

export default Counter;