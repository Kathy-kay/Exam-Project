import React, { useCallback, useState } from "react";
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
import {RxReset} from 'react-icons/rx'


const useCount = (initialCount) => {
  const [counter, setCounter] = useState(initialCount);
  const handlechange = useCallback(({ target: { value } }) => {
    setCounter(value);
  }, []);

  return {
    input: counter,
    increment: () => setCounter(prev => prev + 1),
    decrement: () => setCounter(prev => prev - 1),
    reset: () => setCounter(initialCount),

    handlechange: handlechange,
  };
};

const CustomHook = () => {
  const counter = useCount(0);
  const [input, setInput] = useState(0);
  return (
    <div className="custom-section">
        <div className="customHook">
            <h1>Custom Counter </h1>
            <h1 className="count">{counter.input}</h1>
            <div className="custom-btn">
               <input
               type="text"
               value={counter.value}
               onChange={counter.handlechange}
               className="input-box input"
               />
               <button 
               onClick={counter.decrement}
               disabled={counter.input === 0}
               className='hook-btnbtn'><FaMinus/></button>

                <button 
                onClick={counter.increment}
                className='hook-btnbtn'>
                 <FaPlus/>
                </button>
                <button 
                 onClick={counter.reset}
                 className='hook-btnbtn'>
                  <RxReset />
                </button>
            </div>
        </div>
    </div>
  );
};
export default CustomHook