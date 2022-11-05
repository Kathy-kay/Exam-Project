import { useNavigate } from "react-router-dom";

const ErrorFallback = ({ error }) => {
  const navigate = useNavigate();
  return (
    <>
      <div role="alert" className="error">
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <button
        onClick={() => {
          navigate('/')
        }}>Go Back</button>
      </div>
    </>
  )
}
export default ErrorFallback;