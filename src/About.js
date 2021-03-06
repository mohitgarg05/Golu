import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faChevronDown , faChevronUp
  } from '@fortawesome/free-solid-svg-icons';
  import Logo1 from './img/branding.jpg'
  import Logo2 from './img/digital.jpg'
  import Logo3 from './img/google.jpg'
  import Logo4 from './img/picture12.jpg'
  import Logo5 from './img/picture13.jpg'
const About = () => {
    const [hidden, sethidden] = useState(true)
    const [hidden2, sethidden2] = useState(true)
    const [hidden3, sethidden3] = useState(true)
    const [hidden4, sethidden4] = useState(true)
    const [hidden5, sethidden5] = useState(true)
    const [hidden6, sethidden6] = useState(true)
    
    return (
        <div className="container about-content">
            <div className="row about-inside" style={{marginTop:"200px"}}>
                
                <div className="row services">
                    <div className="col-md-4 image"  >
                            <img src={Logo2}></img>
                            <div className="image-overlay">
                                <div className="image-title">
                                    Digital Strategy
                                </div>
                                <p className="image-dis">
                                We start each new digital product design partnership
                                with an indepth discovery phase to immerse
                                ourselves in your business. Our designers
                                interview stakeholders, conduct user research,
                                analyze your competition, and consolidate content.
                                The result is an action plan on executing a holistic
                                brand and user experience.
                                                                </p>
                            </div>
                    </div>
                    <div className="col-md-8" >
                        <div className="row"  >
                            <div className="col-md-6" >
                                <img src={Logo1} ></img>
                            </div>
                            <div className="col-md-5 ">
                                <img src={Logo3} ></img>
                            </div>
                   
                        </div>
                        <div className="row"  style={{marginTop:"10px"}}>
                            <div className="col-md-6">
                                <img src={Logo4}></img>
                            </div>
                            <div className="col-md-4">
                                <img src={Logo5}></img>
                            </div>
                        </div>
                    </div>
                   
                   
                 </div>
                 <div className="row" style={{marginTop:"10px"}}>
                    <div className="col-md-auto">
                            <img src={Logo5} style={{width:"1200px",height:"400px"}}></img>
                    </div>
                 </div>
               
                {/* <div className="col offset-md-2 about-options " data-aos = "fade-down"  data-aos-duration="1000" data-aos-delay="100">
                    <div className="row" >
                        <div className="col-md-auto about-options-digi " >
                            <p>Digital Strategy</p>
                        </div>
                        <div className="col-md-1 about-options-icon">  
                            <p><FontAwesomeIcon icon={hidden? faChevronDown : faChevronUp} style={{animationDuration:"3s"}} onClick={()=>sethidden(!hidden)}/></p>
                           
                        </div>
                        
                    </div>
                    <div className="row hidden-div">
                        <span id="span-hidden" style={{display: hidden?"none":"block"}}>We start each new digital spanroduct design partnership
                            with an indepth discovery phase to immerse
                            ourselves in your business. Our designers
                            interview stakeholders, conduct user research,
                            analyze your competition, and consolidate content.
                            The result is an action plan on executing a holistic
                            brand and user experience.</span>
                    </div>
                    <div className="row">
                        <div className="col-md-auto about-options-digi " >
                            <p>Branding</p>
                        </div>
                        <div className="col-md-1 about-options-icon">  
                        <p><FontAwesomeIcon icon={hidden2? faChevronDown : faChevronUp} onClick={()=>sethidden2(!hidden2)}/></p>
                        </div>
                        
                    </div>
                    <div className="row hidden-div">
                        <span id="span-hidden" style={{display: hidden2?"none":"block"}}>A brand today is all about how it makes your
                        customers feel. It&#39;s not a logo, visual identity, or
                        digital product design. but rather a cohesive system
                        that spans across all mediums and touchpoints.
                        We&#39;re a branding agency offering a complete
                        solution from naming and logo design to
                        communications and style guides.</span>
                    </div>
                    <div className="row">
                        <div className="col-md-auto about-options-digi " >
                            <p>Web Design</p>
                        </div>
                        <div className="col-md-1 about-options-icon">  
                        <p><FontAwesomeIcon icon={hidden3? faChevronDown : faChevronUp} onClick={()=>sethidden3(!hidden3)}/></p>
                        </div>
                        
                    </div>
                    <div className="row hidden-div">
                        <span id="span-hidden" style={{display: hidden3?"none":"block"}}>We&#39;re a web design agency creating nextlevel
                        websites by strategically blending user experience
                        and brand storytelling. Our web designers and
                        developers create responsive websites that feel at
                        home on any device. Product landing pages,
                        marketing sites - we do it all</span>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-auto about-options-digi " >
                            <p>Development</p>
                        </div>
                        <div className="col-md-1 about-options-icon">  
                        <p><FontAwesomeIcon icon={hidden4? faChevronDown : faChevronUp} onClick={()=>sethidden4(!hidden4)}/></p>
                        </div>
                        
                    </div>
                    <div className="row hidden-div">
                        <span id="span-hidden" style={{display: hidden4?"none":"block"}}>Our fullstack design and development agency
                        based in Sweden provides frontend and
                        backend development services working closely with
                        our designers. As a Website and app development
                        company, we build websites, native mobile apps for iOS and
                        Android, web applications, apps and
                        B2B/enterprise software.</span>
                    </div>
                    <div className="row">
                        <div className="col-md-5 about-options-digi " >
                            <p>Content Development</p>
                        </div>
                        <div className="col-md-1 about-options-icon">  
                        <p><FontAwesomeIcon icon={hidden6? faChevronDown : faChevronUp} onClick={()=>sethidden6(!hidden6)}/></p>
                        </div>
                        
                    </div>
                    <div className="row hidden-div">
                        <span id="span-hidden" style={{display: hidden6?"none":"block"}}>To increase your sales, you need text and images, videos, landing
                        pages, and more that build trust, a feeling that the prospectus needs
                        to perform an action within a certain time, and that they feel
                        selected. We can also manage this part as part of a complete digital
                        marketing strategy or only produce certain content for your
                        company..</span>
                    </div>
    
                  
                </div> */}
            </div>
            
        </div>
    )
}

export default About
