import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} =useContext(AuthContext)
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user?.email])
   
    const handleDelete=(id)=>{
        const proceed=window.confirm('delete this item')
        if(proceed)
        {
         fetch(`http://localhost:5000/orders/${id}`,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data)
             if(data.deletedCount>0)
             {
                alert('delete successfully')
                const remaining=orders.filter(odr=>odr._id!==id)
                setOrders(remaining)
             }
         })
        }
 }    
 const handleStatusUpdate=(id)=>{
    fetch(`http://localhost:5000/orders/${id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({status:'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            const remaining=orders.filter(odr=>odr._id!==id)
            const approving=orders.find(odr=>odr._id===id)
            approving.status='Approved'
            const newOrders=[approving,...remaining]
            setOrders(newOrders)
        }
    })
 }
    return (
        <div>
            <h1>this is order{orders.length}</h1>
            
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
          <button className='btn btn-ghost'> X</button>
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
      {
        orders.map(order=><OrderRow
        key={order._id}
        handleDelete={handleDelete}
        order={order}
        handleStatusUpdate={handleStatusUpdate}
        ></OrderRow>)
      }
    </thead>
    <tbody>
     
     
     
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default Orders;