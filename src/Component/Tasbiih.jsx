
import { counter } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react"
function Tasbiih (){

    const [count, setCountour] = useState (0);
    
    // function increment 
    const Increment = () => {
        setCountour(count + 1)
        
    };

 const Decrement = () => {

    if(count > 0){
      setCountour (count -1)
    }
 }
 const Reset = () => {
    setCountour(0);
 }

    return  <div className="text-center mt-32">
 
   <h1 className="text-7xl mb-10">{count}</h1>
   <button onClick={Increment} className= "bg-orange-500 px-4 py-2 text-2xl m-2 rounded">Increment</button>
   <button onClick={Decrement } className="bg-blue-500 px-4 py-2 text-2xl m-2 rounded " >Decrement</button>
   <button onClick={Reset} className="bg-green-500 px-4 py-2 text-2xl m-2 rounded" >Reset</button>
    </div>
}

export default Tasbiih;