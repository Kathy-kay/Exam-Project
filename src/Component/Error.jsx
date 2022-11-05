import {useNavigate} from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="boundary">
            <h2>Error Page</h2>

            <button 
            className='error-btn'
            onClick={() =>{
                navigate('/')
            }}>Go Back</button>
        </div>
    );
}
 
export default Error;