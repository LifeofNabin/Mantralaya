import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>We help businesses grow with modern technology.</h1>
        <p>Innovative solutions. Expert teams. Global impact.</p>
        <a href="/services" className="btn">Explore Services</a>


        <div className="callbtn">
          <button className='hook'>Book a  call</button> 
          
          </div>
      </section>
      
    </div>
  );
}
