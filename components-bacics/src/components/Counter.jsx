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

    let message=null;
    switch (count) {
        case 1:
            message='First blood';
            break;
        case 2:
            message='Double kill';
            break;
        case 2:
            message='Tripple kill';
            break;
            default:
                message='Monster kill';
        
    }

    let warning='';
    if(count<0){
      warning=<p>Invalid Count!</p>
    }
    return(
        <div>
            <h1>Counter</h1>

        
            {count<0
            ? <p>Invalid count!</p>
            : <p>Valid count!</p>
            }

           {count==0 && <p>Please start incrementing</p>}

             <h4>{message}</h4>
            <p>Count: {count}</p>

            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}