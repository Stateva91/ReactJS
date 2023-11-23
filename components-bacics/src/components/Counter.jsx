import {useState} from "react";

export default function Counter(props){

    const [count, setCount]=useState(0);
    const onIncrementClick=()=>{
        setCount(oldValue=>oldValue+1);
    }
    // if(count<0){
    //     return(
    //         <p>Invalid count!</p>
    //     );
    // }

    let warning=null;
    if(count<0){
      warning=<p>Invalid Count!</p>
    }
    return(
        <div>
            <h1>Counter</h1>

            {warning}
            
            <p>Count: {count}</p>

            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}