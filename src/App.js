import './App.css';

import yt from "./Images/tubetan.png";
import twit from "./Images/twittertan.png";
import insta from "./Images/instatan.png";
import lin from "./Images/intan.png";
import git from "./Images/gittan.png";
import sig from "./Images/signt.png";
import bgimg from './Images/greay.png';

import React, { Component } from "react";
import AnimatedCursor from "react-animated-cursor";
import FadeIn from 'react-fade-in';
import { BrowserView } from "react-device-detect";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Gavin Henderson', inputText: '', link:'', mode:'name'};
    
   
    this.handleInfo = this.handleInfo.bind(this);
    this.handlePort = this.handlePort.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleDonate = this.handleDonate.bind(this);
  }
  
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  handleInfo() {
    this.setState({text: `Info\n\nFull-stack engineer\nSelf-taught\nBased in Philadelphia`, link:'', mode: 'info'});
  }
  handlePort() {
    this.setState({text: 'Portfolio\n\nCompany: Site PPL\nPosition: co-founder\nMarch 2021-Present', link:'www.siteppl.com', mode: 'port'});
  }
  handleContact() {
    this.setState({text: 'email: ghenderson28@comcast.net', link:'',mode: 'contact'});
  }
  handleDonate() {
    this.setState({text: 'Paypal: ghendersonn',link:'', mode: 'donate'});
  }
  

  render () {
  return (
    <div className="App">
      <div className="bg"></div>
       <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      
      <img className="bg-img"src={bgimg} alt='background image' />
      
      <div>
     <BrowserView>
    <AnimatedCursor
      innerSize={20}
      outerSize={10}
      color='0,0,0'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={5}
    />
   </BrowserView>
    <div className="row" >
    <div className="col1">
    <FadeIn delay={500} transitionDuration={2000} className="Nav">
          <li ><button className="button navLink" onClick={this.handleInfo}>Info</button></li>
          <li ><button className="button navLink" onClick={this.handlePort}>Work</button></li>
          <li ><button className="button navLink" onClick={this.handleContact}>Contact</button></li>
          <li ><button className="button navLink" onClick={this.handleDonate}>Donate</button></li>
        </FadeIn>
        
      </div>
      
      <FadeIn delay={0} transitionDuration={2000} className="col2">
      <div>
      <p>
        {this.state.text} 
        </p>
        <a href="https://siteppl.com/">{this.state.link}</a>
        </div>
      </FadeIn>

      <div className="col3">
      <FadeIn delay={500} transitionDuration={2000} className="signature"><img className='sig' src={sig} alt="signature" /></FadeIn>
      <FadeIn delay={500} transitionDuration={2000} transitionProperty='opacity' className="socials">
        <p className="socText">
          @gavinmhenderson
        </p>
        <ul className='icons'>
        <li><a href="https://www.youtube.com/"><img className='sizer' src={yt} alt="youtube icon" /></a></li>
        <li><a href="https://twitter.com/gavinmhenderson"><img className='sizer' src={twit} alt="twitter icon" /></a></li>
        <li><a href="https://www.instagram.com/gavinmhenderson"><img className='sizer' src={insta} alt="instagram icon" /></a></li>
        <li><a href="https://www.linkedin.com/"><img className='sizer' src={lin} alt="Linkedin icon" /></a></li>
        <li><a href="https://www.github.com/"><img className='sizer' src={git} alt="gitHub icon" /></a></li>
        </ul>
        </FadeIn>
      </div>
      
    </div>
    </div>
    </div>
  );
  }
}
export default App;