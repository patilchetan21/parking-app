import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <div>
        <div className='input-detail'>
                <Link to="/input-details" className="navlinks">Input Vehicle Details</Link>
            </div>
            <div className='records'>
                <Link to="records" className="navlinks">Check Garage Records</Link>
            </div>
    </div>
  )
}
