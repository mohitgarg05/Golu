import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import {useEffect} from 'react'
const Home = () => {
    useEffect(()=>{
        AOS.init({duration : 3000})
    },[])
    return (
        <div className="container home-content">
            <div className="row home-inside">
                <div className="home-heading" data-aos = "fade-down"  data-aos-duration="1000" data-aos-delay="100">
                    <h2>Web agency is a UI/UX design and branding</h2>
                     <h2>agency in Sweden.</h2>
                </div>
            </div>
          
              
        </div>
    )
}

export default Home
    