function Success(){
    return <p className="successText">Success</p>
  }
  function Error() {
    return <p className="errorText">There seemed to have been a problem, try again</p>
  }
  
  type ErrorHandlingProps = {httpStatusCode?: number}
  
  export function ErrorHandling(props: ErrorHandlingProps){ 
    if(props.httpStatusCode === undefined) return <p></p>
    else
    return props.httpStatusCode === 200 ? <Success/>: <Error/>
}