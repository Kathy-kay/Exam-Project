import { useState } from 'react'
import './App.css'
import {ErrorBoundary} from 'react-error-boundaries'
import {Routes, Route} from 'react-router-dom'
import ErrorFallback  from './Component/ErrorFallback'
import Navbar from './Component/Navbar'

import Home from './Component/Home'
import CustomHook from './Component/CustomHook'
import NoMatch from './Component/NoMatch'
import Error from './Component/Error'
import {useNavigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}  onReset={()=>{
      navigate("/")
    }
        }>
        <Navbar />
          <Routes>
            <Route>
              <Route path='/' element={<Home/>} />
              <Route path='custom' element={<CustomHook />} />
              <Route path='error' element={<Error/>}/>
              <Route path='*' element={<NoMatch />}/>
            </Route>
          </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
