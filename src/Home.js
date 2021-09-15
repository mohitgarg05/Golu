import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import {useEffect} from 'react'
import Video from './video/video.mp4'
const Home = () => {
    useEffect(()=>{
        AOS.init({duration : 3000})
    },[])
    return (
        <div className="container home-content">
            <div className="row home-inside">
                <div className="row home-heading">
                    <h2 id="line1">Web Agency of Sweden </h2>
                   <h2 id="line2"> We are NOT GOOD for your competitors</h2>
                </div>
                <div className="home-video" data-aos = "fade-down"  data-aos-duration="1000" data-aos-delay="100">
                <video muted controls loop autoPlay id="myVideo">
                        <source src={Video} type="video/mp4" />
                        Your browser does not support HTML5 video.
                        </video>
                </div>
            </div>
          
              
        </div>
    )
}

export default Home
    