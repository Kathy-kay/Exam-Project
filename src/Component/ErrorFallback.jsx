

const ErrorFallback = ({ error, resetErrorBoundary }) => {

  return (
    <>
      <div role="alert" className="error">
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Go Home</button>
      </div>
    </>
  )
}
export default ErrorFallback;