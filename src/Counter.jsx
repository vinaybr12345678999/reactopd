import { useState } from "react" 
function handleClick(){
    console.log(count)
}

function Counter(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    console.log(count)
}

    return(
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}
export default Counter