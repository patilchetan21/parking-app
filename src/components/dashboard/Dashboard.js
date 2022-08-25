import React from 'react'
import './Dashboard.css'
import {Link} from 'react-router-dom'
export const Dashboard = () => {
  return (
    <div className='dashboard-root'>
        <div className='input-detail'>
            <Link to="/input-details" className="navlinks">Input Vehicle Details</Link>
            {/* <InputDetails /> */}
        </div>
        <div className='records'>
            <Link to="records" className="navlinks">Check Garage Records</Link>
        </div>
        
    </div>
  )
}
