import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Singup = () => {

    const {createUser}=useContext(AuthContext)
    const handleSingup=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password =form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))

    }
    return (
        <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingup} className="card-body">
              <div className="form-control">
              <h1 className="text-5xl text-center font-bold">Singup</h1>
                <label className="label">
                
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
             
                <label className="label">
                
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div  className="form-control mt-6">
                
                 <input className="btn btn-primary" type="submit" value="login" />
              </div>
            </form>
            <p className='text-center mb-4'>Already Have an account <Link className='text-orange-600 font-semibold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Singup;