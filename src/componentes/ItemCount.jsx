import { useEffect } from "react";
import { useState } from "react";

const ClickTracker = () => {
    const [count, setCount] = useState(0); 
    


    const registrarClick = (operacion) => {
        if (operacion === "-" && count > 0) {
            setCount(count - 1);
        } else if(operacion === "+"){
            setCount(count +1);
        }
    }
    return ( 
        <>
        <button onClick={() => registrarClick("-")}>-</button>
        {count}
        <button onClick={() => registrarClick("+")}>+</button>
        </>
     );
}
 
export default ClickTracker;