import React, { useState } from 'react';

const IncrementComponent= () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // You can define a function to calculate the background color based on the count
  const calculateBackgroundColor = () => {
    // For example, change the background color every 5 increments
    if (count % 5 === 0) {
      return 'yellow'; // Change this to the desired color
    } else {
      return 'white'; // Change this to the default color
    }
    
  };

  return (
    <div style={{ backgroundColor: calculateBackgroundColor() }}>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default IncrementComponent;
