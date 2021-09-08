import React from 'react';

import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



import '../Globals';

import "../styles/App.scss";


import logo_avacadoface from '../assets/avacado_toon.svg';
import logo_bananaface from '../assets/banana_toon.svg';
import logo_cucumberface from '../assets/cucumber_toon.svg';
import logo_peppreface from '../assets/pepper_toon.svg';
import logo_berryface from '../assets/berry_toon.svg';



function LogoAvacadoFace(props) {
  return <img className="berryface-icon" src={logo_avacadoface} alt="berryclub Logo" />;
}
function LogoBananaFace(props) {
  return <img className="berryface-icon" src={logo_bananaface} alt="berryclub Logo" />;
}
function LogoCucumberFace(props) {
  return <img className="berryface-icon" src={logo_cucumberface} alt="berryclub Logo" />;
}
function LogoPepperFace(props) {
  return <img className="berryface-icon" src={logo_peppreface} alt="berryclub Logo" />;
}
function LogoBerryFace(props) {
  return <img className="berryface-icon" src={logo_berryface} alt="berryclub Logo" />;
}

const AboutPage = () => (
    <div>



<div class="container">


  <div class="row">
  <div class="col-3">

    <div class="row">
      <LogoAvacadoFace/>
      </div>
    

    <div class="row">
      <LogoBananaFace/>
      </div>

    <div class="row">
      <LogoCucumberFace/>
      </div>
    
    </div>
    <div class="col">
    <h1>Berry Club</h1>      
    <p>
        Berry Club is a DeFi app designed to let users have fun creating shared pixel art while farming token rewards. Berry Club achieves this with the elegant use of tokens called Avocados, Bananas, and Cucumbers. It’s also a great use of NEAR Protocol’s built-in features that aren’t found in other blockchains, such as automatic fee payments to smart contract creators. It started as a DeFi proof of concept, and has since grown into a popular community project on NEAR.
    </p>
   <p>
    Read more: <a href="https://near.org/blog/funberryclub/">near.org/blog/funberryclub/</a>
    <br/>
    Read more II: <a href="https://near.org/blog/berry-club-part-ii/">near.org/blog/berry-club-part-ii/</a>
   </p>
    <iframe width="100%" height="333" src="https://www.youtube-nocookie.com/embed/wfTa-Kgw2DM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  </div>
  </div>

<hr class="hr"/>

<div class="container">
  <div class="row">
  <div class="col-3"><LogoPepperFace/></div>
  <div class="col">
  <h1>Berry Cards</h1>      
    <p>
        Berry Cards 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
    Read more: <a href="https://near.org/blog/funberryclub/">near.org/blog/funberryclub/</a>
   </p>
  </div>
  </div>
  </div>

  <hr class="hr"/>

<div class="container">
  <div class="row">
  <div class="col-3"><LogoBerryFace/></div>
  <div class="col">
  <h1>Near FM</h1>      
    <p>
        Near FM 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
    Read more: <a href="https://near.org/blog/funberryclub/">near.org/blog/funberryclub/</a>
   </p>
  </div>
  </div>
  </div>



  </div>    
    
);

export default AboutPage;



// 

{/* <Container>
    <div  class="container">

    <div  className="container">

    <div  className="container">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wfTa-Kgw2DM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <row  className="row">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PYF6RWd7ZgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </row>
    <row  className="row">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lMSWhCwstLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </row>
    </div>
    </Container> */}