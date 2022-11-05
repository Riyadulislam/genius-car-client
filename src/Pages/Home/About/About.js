import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen my-5 bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
        <div className='w-1/2 relative'>
        <img src={person} className=" w-4/5 h-full max-w-sm rounded-lg shadow-2xl" />
        <img src={parts} className="border-8 top-1/2 w-3/5 right-5 absolute max-w-sm rounded-lg shadow-2xl" />
        </div>
          <div className='w-1/2'>
            <h1 className="text-5xl text-orange-600 font-bold py-4">About Us</h1>
            <h1 className="text-5xl font-bold">
                  We are qualified & of experience in this field</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get More info</button>
          </div>
        </div>
      </div>
    );
};

export default About;