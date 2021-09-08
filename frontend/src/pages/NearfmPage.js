import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CardImage, preloadCard } from "../components/CardImage";

import '../Globals';

import "../styles/App.scss";


import logo_avacadoface from '../assets/avacado_toon.svg';
import logo_bananaface from '../assets/banana_toon.svg';
import logo_cucumberface from '../assets/cucumber_toon.svg';
import logo_peppreface from '../assets/pepper_toon.svg';
import logo_berryface from '../assets/berry_toon.svg';

import img_berrycard from '../assets/berrycard_sample.jpg';

import img_card1 from '../assets/card1.png';
import img_card2 from '../assets/card2.png';

// berryclub v2 design
import logo_avacado from "../assets/berry-avacado.svg"
import logo_banana from "../assets/banana.svg"
import logo_pepper from "../assets/pepper.svg"
import logo_berry from "../assets/berry.svg"

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
function LogoBerryCard(props) {
  return <img className="berryface-icon" src={logo_berryface} alt="berryclub Logo" />;
}
//  return <img className="berrylogo-icon" src={logo_avacado} alt="berryclub Logo" />;


function LogoBerry(props) {
  return <img className="berrylogo-icon" src={logo_berry} alt="berryclub Logo" />;
}
function LogoPepperCard(props) {
  return <img className="berrylogo-image img-fluid rounded mx-auto" src={img_berrycard} alt="berryclub Logo" />;
}
function PepperCard(props) {
  return <img className="berrycard-image img-fluid mx-auto" src={img_card2} alt="berryclub Logo" />;
}



function LogoAvacado(props) {
  return <img className="berrylogo-icon" src={logo_avacado} alt="berryclub Logo" />;
}


function CardItem(props) {
  
  // const [modalShow, setModalShow] = React.useState(false);
  // const handleShow = () => setShow(true);
  // const modalShow = () => React.useState(false);
// const handleShow = () => setShow(true);

  return <><li>
   <div className="col nearfmcard text-left p-3">
    <h5 class="card-title">@testjhey.testnet</h5>
    <h6 class="card-subtitle mb-2 text-muted  pull-right">12 minutes ago</h6>
    <p class="card-text">
    ❤️🧡💛💚💙💜
HELLO!!!
I am delighted with your idea, can you tell us more?
</p>

    </div>
    </li>
    
  </>;
}

function CardPager(props) {
  return <div className="container mx-auto berrypager">
  <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />
  
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>
  
  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
  </Pagination>
  </div>;
}







// --------------- page


const NearfmPage = () => (
  
    <div>



<div className="container">
  <div className="row">
  <div className="col-3">
  <div className="text-center">
     <LogoPepperCard/>
     </div>
  </div>
  <div className="col">
  <div className="page-headers">

<h2><LogoBerry/> Near FM</h2>{" "}

</div>

    <p>
    Near FM 
        Lorem ipsum dolor sit amet, consectetur adipiscingim ad miisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
    Read more: <a href="https://near.org/blog/funberryclub/">near.org/blog/funberryclub/</a>
   </p>
  </div>
  </div>
  </div>

  <hr className="hr"/>





  <div className="container">
  <div className="row">
  <Tabs defaultActiveKey="discover" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="recent" title="Recent">
    
recetns///

    {/* <CardPager/>     */}
  </Tab>

  <Tab eventKey="discover" title="Discover">
   

<div className="container mb-8">
      <div className="row mb-8">
      <ul class="timeline">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
</ul>
      </div>
    </div>




<CardPager/>    
  </Tab>
  {/* <Tab eventKey="stats" title="Stats">
Stats Page
  </Tab> */}
  <Tab eventKey="profile" title="Profile" disabled>
n/a
  </Tab>
</Tabs>

</div>
</div>







  </div>    
    
);

export default NearfmPage;
