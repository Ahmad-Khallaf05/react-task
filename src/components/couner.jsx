import { useState, useEffect } from "react";

function Counter() {
    const [counter, setcounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log(counter);
        console.log(counter2);
      }, [counter, counter2]);

      return(
        <div>
            <h1>countr1 : {counter}</h1>
            <h1>countr2 : {counter2}</h1>

            <button onClick={()=>setcounter(counter+1)}>counter1 : counter1 + 1</button>
            <button onClick={()=>setCounter2(counter*2)}>counter2 : counter1 * 2</button>
        </div>
      )
}

export default Counter;