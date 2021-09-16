import React,{useState} from 'react'
import Logo from './img/logo3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faTimes
  } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [open, setopen] = useState(false)
    const openOptions=()=>{
        setopen(!open)
       var dv  =  document.getElementById('open')
       dv.classList.toggle("active2")
    }
    return (<>
        <div className="container navbar-content">
            <div className="row navbar-inside" >
                <div className="row navbar-row" >
                    <div className="col-md-1 col-sm-2 offset-md-1 navbar-logo" >
                        <img src={Logo}></img>
                    </div>
                    <div className="col-md-1 col-sm-2 offset-md-9 offset-sm-8 navbar-button" onClick={openOptions}  >
                    {!open? <>
                        <div className="row" style={{border:"solid",width:"30px",marginTop:" 32px"}}></div>
                        <div className="row" style={{border:"solid",width:"30px",marginTop:"5px"}}></div></>
                   : <>
                       <FontAwesomeIcon icon={faTimes} size="3x" style={{marginTop:"22px"}}/>
                   </>}
                   </div>
                   
                </div>
            </div>
            <div className="col-md-2 offset-md-8 offset-sm-4 navbar-options" id="open">
            <div className="row navbar-option-inside" style={{marginTop:"29px"}}>
                <div className="row">
                    <a href=""><h2>Home</h2></a>
                </div>
                <div className="row">
                    <a href=""><h2>services</h2></a>
                </div>
                <div className="row">
                    <a href=""> <h2>About Us</h2></a>
                </div>
                <div className="row">
                    <a href=""> <h2>Contact Us</h2></a>
                </div>
                <div className="row">
                    <a href=""> <h2>Language</h2></a>
                </div>
            </div>
                
            </div>
        </div>
       
        </>
    )
}

export default Navbar
