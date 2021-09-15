import React,{useState} from 'react'

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
                <div className="col-md-5 about-create">
                    <h4 data-aos = "fade-down"  data-aos-duration="1000" data-aos-delay="100">We create world-class digital products,web design, and branding.</h4>
                </div>
                <div className="col offset-md-2 about-options " data-aos = "fade-down"  data-aos-duration="1000" data-aos-delay="100">
                    <div className="row" >
                        <div className="col-md-auto about-options-digi " >
                            <p>Digital Strategy</p>
                        </div>
                        <div className="col-md-1 about-options-icon">  
                            <i class= {hidden?"fas fa-chevron-down":"fas fa-chevron-up"} onClick={()=>sethidden(!hidden)} ></i>
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
                        <i class= {hidden2?"fas fa-chevron-down":"fas fa-chevron-up"} onClick={()=>sethidden2(!hidden2)} ></i>
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
                            <i class={hidden3?"fas fa-chevron-down":"fas fa-chevron-up"}  onClick={()=>sethidden3(!hidden3)} ></i>
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
                        <i class={hidden4?"fas fa-chevron-down":"fas fa-chevron-up"}  onClick={()=>sethidden4(!hidden4)} ></i>
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
                        <i class={hidden6?"fas fa-chevron-down":"fas fa-chevron-up"}  onClick={()=>sethidden6(!hidden6)} ></i>
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
    
                  
                </div>
            </div>
            
        </div>
    )
}

export default About
