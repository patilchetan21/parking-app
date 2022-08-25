import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import './Records.css'

export const Records = () => {
    const vRec = [
        {
            "srN":1,
            "vNum": "MH19CA0011",
            "oName" : "Chetan Patil"
        },
        {
            "srN":2,
            "vNum": "MH25CP2525",
            "oName": "Raju Raman"
        },
        {
            "srN":3,
            "vNum": "MH19CA0011",
            "oName" : "Chetan Patil"
        },
        {
            "srN":4,
            "vNum": "MH25CP2525",
            "oName": "Raju Raman"
        },
        {
            "srN":5,
            "vNum": "MH19CA0011",
            "oName" : "Chetan Patil"
        },
        {
            "srN":6,
            "vNum": "MH25CP2525",
            "oName": "Raju Raman"
        }
    ]
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        db.collection("inputdetails").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc=>doc.data()))
        })
    },[])

  return (
    <div className='records-root'>
        <div className='record-container'>
            <h1 className='records-heading'>Vehicle Records in Garage</h1>
            <hr />
            <div className='table-container' >
                <table className='recTable'>
                    <thead>
                        <tr>
                            <th colspan='5'>Total Vehical In Garage: {posts.length}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Sr. no</th>
                            <th>Owner Name</th>
                            <th>Vehicle Number</th>
                            <th>Check-in Time</th>
                            <th>Check-out TIme</th>
                        </tr>
                        {
                            posts.map((rec)=>{
                                return (
                                    <tr>
                                        <td>{}</td>
                                        <td>{rec.ownerName}</td>
                                        <td>{rec.vehicleNumber}</td>
                                        <td>{}</td>
                                        <td>{}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Link to="/" className='navlinks'>Go to Dashboard</Link>
                <Link to="/input-details" className='navlinks'>Add More Records</Link>
            </div>
        </div>
        
    </div>
  )
}
