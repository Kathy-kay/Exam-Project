import {useNavigate} from 'react-router-dom'

const NoMatch = () => {
    const navigate = useNavigate()
    return (
       <div className="error-page">
        <h3>404 Page</h3>
        <p>Page not found</p>
        <button 
        className="error-btn"
        onClick={() =>{
            navigate('/') }}>Go Back</button>
       </div>
    );
}
 
export default NoMatch;