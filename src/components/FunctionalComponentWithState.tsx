import {useState} from 'react';
const FunctionalComponentWithState =()=>{

    const [count,setCount]=useState(0);
    const increaseCount= ()=>{
        setCount(count+1);
    }
    return(
        <>
            <h1 className="text-center">Count is 0,1,2</h1>
            <div className = "text-center">
            <button className="bg-cf-dark text-white py-2 px-4"
                onClick={increaseCount}
                    >
                Increase
            </button>
        </div>
        </>
    )
}

export default FunctionalComponentWithState;