import React from 'react';
import Dropdown from 'react-dropdown';
import Danny from "../Login/images/Danny.jpg";
import Bart from "../Login/images/bart.png";
import Shambhawi from "../Login/images/shambhawi.jpg";
import ShopprLogo from "../Login/images/logoshort.png";


function About(){
    
    return (
        <div>
             <div id="banner" className="center">
        <img id="logoBan" src={ShopprLogo} />
                
 
         
        </div>


         <div className="container center valign-wrapper">
          <div className="row">
          <div className="col s12 l12">
          <h1 id="thankYou" className="black-text">Meet the Shoppr Team:</h1>
          </div>
          </div>
          <div className="row">
            <div className="col s12 l12">
              <img className="circle" id="bart" src={Bart} alt="Bart" />
              Bart developed the 
              <h5 className="black-text">Bart Dority</h5>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l12">
              <img
                className="circle"
                id="Shambhawi"
                src={Shambhawi}
                alt="Shambhawi"
              />
              <h5 className="black-text">Shambhawi Kumari</h5>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l12 ">
              <img className="circle" id="Danny" src={Danny} alt="Daniel" />
              <h5 className="black-text">Daniel Jauregui</h5>
            </div>
          </div>
        </div>
        <div>
        </div>
        </div>
    );
}

export default About;