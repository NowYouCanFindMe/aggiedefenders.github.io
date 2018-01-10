import React, { Component } from 'react';
import {
    Spinner,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";
import image from "../../assets/img/network.gif";
import Background from "../../assets/img/bg_b.jpg";
import {Button} from 'reactstrap';

 
const backgroundImage={
    backgroundImage: `url(${Background})`,
    flex: 1,
    width: null, 
    height: null
   
}
const containerStyle={
    backgroundColor:'#2c3e50',
    height: '600px', 
    borderTopLeftRadius:'5px', 
    borderTopRightRadius:'5px'
   
}
const titleStyle={
    margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none',
    color: 'white'
}

const imageStyle={
    flex: 1,
    width: '350px',
    height: null,
    resizeMode: 'contain'
}

class Head extends Component {
    constructor(){
        super();
        
        }
  render() {
    return (
      <div style={backgroundImage} className="pt-container">
     
         <div style={containerStyle}className="pt-getting-started">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="container">
                    <h1 style={titleStyle}>AggieDefenders</h1>
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className="container">
                <div className="row">
               <div className ="col-md-4"></div> 
                    <div className="col-md-4">
                        <img style={imageStyle}
                        src={image} data-src="" data-src-retina="" alt="kkk" className="img-responsive" />
                    </div>
                <div className ="col-md-4"></div> 
                </div>
            </div>


            <div className="container">
                <div className="row">
               <div className ="col-md-3"></div> 
                    <div className="col-md-6 col-centered"
                    style={{
                      textAlign:'center',  
                      justifyContent: 'center'
                    }}>
                         <hr style={{ backgroundColor:'#7f8c8d', opacity: 0.9, color:'white'}}className="my-2" />
                         <div className="row">
                            <h4>Learn how to protect your Internet of Things (IOT) devices</h4>
                        </div>
                        <div className="row">
                            <h4>Get awareness of security exploits and reduce your risks</h4>
                        </div>
                         <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'><Button href="#/login" outline color="primary">LOGIN</Button></div>
                            <div className='col-md-3'></div>
                        </div>
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'><p>Keep your Data Secured</p></div>
                            <div className='col-md-3'></div>
                        </div>
                        
                    </div>
                <div className ="col-md-3"></div> 
                </div>
            </div>
        </div>
    </div>

     </div>
        
    
    );
  }
}

export default Head;
