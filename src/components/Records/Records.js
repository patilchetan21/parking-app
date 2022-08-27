import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import './Records.css'

export const Records = () => {
    
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
                            <th colSpan='5'>Total Vehical In Garage: {posts.length}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Sr. no</th>
                            <th>Owner Name</th>
                            <th>Vehicle Number</th>
                            <th>Check-in Time (24 hrs)</th>
                            <th>Check-out TIme (24 hrs)</th>
                        </tr>
                        {
                            posts.map((rec)=>{
                                return (
                                    <tr key={posts.indexOf(rec)}>
                                        <td>{posts.indexOf(rec) + 1}</td>
                                        <td>{rec.ownerName}</td>
                                        <td>{rec.vehicleNumber}</td>
                                        <td>{rec.checkInTime}</td>
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
