import React, { useState } from 'react'
import './InputDetails.css'
import { db } from "../firebase";
import { Link } from 'react-router-dom';
// import { Timestamp } from 'firebase/firestore'
export const InputDetails = () => {
    const [vehicleNumber, setVehicleNum] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [checkInTime,setCheckInTime] = useState('00:00');
    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
      
      db.collection("inputdetails")
      .add({
        vehicleNumber:vehicleNumber,
        ownerName:ownerName,
        // checkInTime:Timestamp.now(),
        checkInTime:checkInTime,
      })
      .then(()=> {
        alert("Data submitted successfully...");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.massage)
      });
      setVehicleNum('');
      setOwnerName('');
    };

  return (
    
    <div className='input-detail-root'>
      <div className='input-container'>
      <h1 className='input-heading'>Enter Vehicle Details</h1>
        <div className='form-container'>
            <hr />
            <form onSubmit={handleSubmit}>
                <p className='input-labels'>Enter Vehicle Number</p>
                <input className='form-inputs' type='text' name='vehicleNumber' value={vehicleNumber} onChange={(e)=>setVehicleNum(e.target.value)} required />
                <p className='input-labels'>Enter Vehicle Owner Name</p>
                <input className='form-inputs' type="text" name="ownerName" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} required />
                <p className='input-labels'>Check-In Time: </p>
                <input type="time" name="checkInTime" className="form-inputs" value={checkInTime} onChange={(e)=>setCheckInTime(e.target.value)}/>
                <button className='submit-btn' type="submit" value="Submit" style={{background: loader ? "#2d302d00" : "black"}}>Submit</button>
            </form>
            <hr />
        </div>
        <div>
          <Link to="/" className='navlinks'>Go to Dashboard</Link>
          <Link to='/records' className='navlinks'>Go to Records</Link>
        </div>
      </div>
    </div>
  )
}
