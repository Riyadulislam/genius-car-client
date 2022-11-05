import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const {image,id,prev,next}=slide;
    return (
     
     <div id={`slide${id}`} className="carousel-item relative w-full">
       <div className='pickgradient'>
       <img src={image} className="w-full rounded-xl" />
       </div>
          <div className="absolute flex justify-end top-1/4  transform -translate-y-1/2  left-20 ">
            <h1 className=' text-5xl text-white font-bold'>
                Affordable<br></br>
                Price For Car<br></br>
                Servicing
            </h1>
          </div>
          <div className="absolute w-1/2 flex justify-end  transform -translate-y-1/2 left-20  top-1/2">
            <p className='text-xl text-white'>There are many varieses of passages available.But the majority have suffer aulternation of some from</p>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-20 top-2/3 ">
                <button className="btn btn-outline btn-success mr-5">Success</button>
                <button className="btn btn-outline btn-warning">Warning</button>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-6">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
          </div>
        </div>
    );
};

export default BannerItem;