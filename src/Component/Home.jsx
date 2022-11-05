import { useReducer, useState } from "react"
import {reducer} from './reducer'
//import useCounter from "./useCounter"




const Home = () =>{

    const [state, dispatch] = useReducer(reducer, 0);

    const [value, setValue] = useState(0);

    const handleSet = () =>{
        dispatch({type: 'Set' , payload: +value})
        setValue(0)
    }
    const handleIncrement = (e) =>{
        e.preventDefault()
        dispatch({type: 'Increment'})
        //console.log('button clicked')


    }
    const handleDecreament = (e) =>{
        e.preventDefault();
        dispatch({type: 'Decreament'})
        
    }
    const handleReset = (e) =>{
        e.preventDefault()
        dispatch({type: 'Reset'})
        
    }

    return(
        <div className="container">
            <div className="counter-display">
                <h1>Count : {state}</h1>
                <div className="btn">
                    <div className="item first">
                    <input 
                    type="text" 
                    value={value}
                    onChange={(e) =>{
                    setValue(e.target.value)
                    }}
                    className="input-box"/>
                <button 
                 onClick={handleSet}
                 className='btn-btn'
                 >SetValue
                 </button>
                    </div>
                    <div className="item">
                    <button 
                    onClick={handleDecreament}
                    className="item-btn"
                    disabled={state === 0}
                    >Decreament</button>


                <button 
                 onClick={handleIncrement}
                 className="item-btn"
                 >Increment
                 </button>
                    </div>
                <button  
                className="item second btn-btn"
                 onClick={handleReset}
                 >Reset
                 </button>
                </div>
            </div>

        </div>
    )

}
export default Home;