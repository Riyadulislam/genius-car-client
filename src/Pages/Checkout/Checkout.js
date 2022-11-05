import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext)
    const handlePlaceorder = (event) => {
      event.preventDefault();
      const form = event.target;
      console.log(event.target.firstName.value)

      const name = `${event.target.firstName.value} ${form.lastName.value}`
      
      
      console.log(name)
      const email = user?.email || 'unregisterd'
      const phone = form.phone.value;
      console.log(phone)
      const messege = form.messege.value;
      const order = {
          service: _id,
          serviceName: title,
          price,
          customer:name,
          email,
          phone,
          messege
        }
        console.log(order)
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }

    return (
        <form onSubmit={handlePlaceorder}>
            <h1 className='text-4xl'>{title}</h1>
            <h1 className='text-3xl'> price:${price}</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full " />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full " />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                <input name="email" type="text" placeholder="Your Email" readOnly defaultValue={user?.email} className="input input-bordered w-full " />
            </div>
            <textarea name="messege" className="textarea textarea-bordered h-24 w-full" placeholder="messege"></textarea>
            <input  className="btn mb-2" type="submit" value="Please your order" />
        </form>


    );
};

export default Checkout;