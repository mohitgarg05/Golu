import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    
  } from '@fortawesome/free-solid-svg-icons';
const Subscribe = () => {
    return (
        <div className="container sub-content">
            <div className="row sub-inside" style={{marginTop:"30px",justifyContent:"space-between"}} >
            <div className="col-md-auto  sub-box" >
                <div className="row">
                        <h2>Subscribe</h2>
                </div>
                <div className="row">
                    <p>Subscribe to get our newspaper & stay updated</p>
                </div>
                <div className="row">
                    <form>
                        <i class="fa fa-envelope"></i>  
                        <div className="form-input">
                            <input />
                            </div>
                        
                        <button>Subscribe</button>
                    </form>
                </div>
              </div>
              <div className="col-md-4 footer-line" >
                  <p>When you become a customer with us, you get free support for 12 months WITHOUT any extra charges</p>
              </div>
              <div className="col-md-3 footer-links" >
                <div className="row justify-content-end" >
                    <div className="col-md-2 footer-fb " >
                       <a href="https://www.facebook.com/Web-Agency-Of-Sweden-101410975632379" target="_blank"> <i class="fab fa-facebook"></i></a>
                    </div>
                    <div className="col-md-2 footer-fb">
                       <a href="https://www.instagram.com/webagencyofsweden/" target="_blank"> <i class="fab fa-instagram"></i></a>
                    </div>
                    <div className="col-md-2 footer-fb">
                    <a href="https://twitter.com/webagencyofswe" target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                    <div className="col-md-2 footer-fb">
                    <a href="https://www.youtube.com/channel/UClqCugsltQTDVlrVT0m4xYQ" target="_blank"><i class="fab fa-youtube"></i></a>

                    </div>
                    <div className="col-md-2 footer-fb">
                    <a><i class="fab fa-snapchat"></i></a>
                    </div>
                    <div className="col-md-2 footer-fb">
                    <a href="https://www.tiktok.com/@webagencyofsweden?lang=sv-SE" target="_blank"> <i class="fab fa-tiktok"></i></a>
                    </div>
                 </div>
                 
              </div>
            </div>
            
        </div>
    )
}

export default Subscribe
