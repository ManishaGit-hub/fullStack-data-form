import React,{useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

const SuccessPage = () => {
    const navigate = useNavigate()
    const {state} = useLocation()

    useEffect(()=>{
        if(!state?.referenceId){
        navigate('/')
        }
    },[state,navigate])
    if(!state?.referenceId) return null

    

  return (
    <div className="container mt-5 text-center">
        <div className="alert alert-success">
            <h4>Form Submitted Successfully</h4>
            <p>
                <strong>Reference ID:</strong>{state.referenceId}
            </p>
            <p>Please save this ID for future communication.</p>
        </div>
        <div>
            <button className="btn btn-secondary mt-3" onClick={()=> navigate('/')}>Back</button>
        </div>
    </div>
  )
}

export default SuccessPage