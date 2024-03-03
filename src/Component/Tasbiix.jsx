
import { useState } from "react"

function Tasbiix (){


    const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);

    
    
  };



  const Decrement = () => {
  
    if(count > 0){
      setCount (count -1)
    }
    
  }

  const Reset = () => {
    setCount(0);
  };
       

    return <div className="text-center mt-[80px]">
      <h1>This is Tasbiih</h1>
        <h1 className="text-4xl">{count}</h1>
        <button onClick={Increment} className="bg-yellow-500 px-6 py-3 rounded text-white m-3 text-3xl">Increment</button>
        <button onClick={Reset} className="bg-green-700 text-white px-6 py-3 rounded m-3 text-3xl">Reset</button>
        <button onClick={Decrement} className="bg-purple-500 px-6 py-3 text-white rounded m-3 text-3xl">Decrement</button>
  
    </div>




};

export default Tasbiix
