import React, { useState } from 'react'
import './Update.css'
import { db } from '../firebase';

export const Update = () => {
    const [vehicalNumber, setVehivleNumber] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');
  return (
    <div className='update-detail-root'>
        <div className='update-container'>
            <form>
                <p className='input-labels'>Enter Vehicle Number to Add Check-out Time</p>
                <input className='form-inputs' type="text" name="vehicleNumber" value={vehicalNumber} onChange={(e)=>setVehivleNumber(e.target.value)} />
                {/* <button className='submit-btn' type="submit" value="Submit" >Submit</button> */}
                
                {/* db.ref("inputdetails")
                    .equalTo(vehicalNumber)
                    .on('value', (snapshot)=>{
                        if(snapshot.val()===null){
                            console.log("Data not found");
                        }else{
                            console.log(snapshot);
                        }
                    }) */}

                <p className='input-labels'>Enter Check-out time</p>
                <input className='form-inputs' type="time" value={checkOutTime} onChange={(e) => setCheckOutTime(e.target.value)} />
                
            </form>
        </div>
    </div>
  )
}
