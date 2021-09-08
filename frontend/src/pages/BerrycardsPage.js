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


function LogoPepper(props) {
  return <img className="berrylogo-icon" src={logo_pepper} alt="berryclub Logo" />;
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

  return <div className="berrycarditem col col-12 col-lg-3 col-xl-2 mb-3 text-center">
  <Card>
    <PepperCard/>
  {/* <Card.Img variant="top" src="{img_card2}" cap="d" /> */}


  <Card.Body>
    <span className="userid">#2612345</span>
    {/* <Card.Link href="#">Card Link</Card.Link> */}
    <div className="col berrybuy text-center">
      <button
            className="btn btn-sm btn-primary text-center"
            size="sm">
            <span className="font-weight-bold text-center">1.23</span> NEAR Ⓝ
          </button>{" "}
    </div>
  </Card.Body>
</Card>
  </div>;
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

function Voters (){
  return (
    <div>
      <div className="container">

          <div>
            <h3>Vote</h3>
            <div className="row justify-content-md-center mb-3">
              <div className="col col-sm-6">
                <div
                  className={`leftReady`}
                  onClick={(e) => ""}
                >
                  {/* <CardImage className="img-fluid" cardId={1} cardReady={setLeftReady}/> */}
                </div>
              </div>
              <div className="col col-sm-6">
                {/* <div
                  className={`card-picker${!rightReady ? " disabled": ""}`}
                  onClick={(e) => ""}
                >
                  <CardImage className="img-fluid" cardId={11} cardReady={setRightReady}/>
                </div> */}
              </div>
            </div>
            <div className="row justify-content-md-center mb-3 berrybuy">
              <button
                className="btn btn-lg "
                onClick={(e) => ""}
              >Skip both cards</button>
            </div>
          </div>


        <div className="row justify-content-md-center mb-3">
          {/* {(cards.length > 0) && ( */}
            <div>
              <h3>Recent votes</h3>
              {/* {cards} */}
            </div>
          {/* )} */}
        </div>


      </div>
    </div>
  );

}


// ----------------- modal

// buy Modal
function MyVerticallyCenteredModal(props) {

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [modalShow, setModalShow] = React.useState(false);
  // const [handleShow, setModalShow] = React.useState(true);
  
  return (
    <Modal
      {...props}
      size="xl berrybuy"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        {/* <LogoAvacado/> Buy Card */}buy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
      <div class="container">
         <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
</div>

        <div class="container">
  <div class="row">
    <div class="col">
    <button
            className="btn btn-primary"
            onClick={() => this.buyTokens(10)}
          >
            Buy <span className="font-weight-bold">25<img class="berrylogo-icon" src={logo_avacado} alt="berryclub Logo" /></span> for{" "}
            <span className="font-weight-bold">Ⓝ 0.1</span>
          </button>{" "}
    </div>
    <div class="col">
    <button
            className="btn btn-primary"
            onClick={() => this.buyTokens(40)}
          >
            Buy <span className="font-weight-bold">100<img class="berrylogo-icon" src={logo_avacado} alt="berryclub Logo" /></span> for{" "}
            <span className="font-weight-bold">Ⓝ 0.4</span>
          </button>{" "}
    </div>
    <div class="col">
    <button
            className="btn btn-primary"
            onClick={() => this.buyTokens(100)}
          >
            Buy <span className="font-weight-bold">250<LogoAvacado/></span> for{" "}
            <span className="font-weight-bold">Ⓝ 1</span>
          </button>{" "}
    </div>

    <div class="col">
    <button
            className="btn btn-success"
            onClick={() => this.buyTokens(500)}
          >
            DEAL: Buy <span className="font-weight-bold">1500<LogoAvacado/></span>{" "}
            for <span className="font-weight-bold">Ⓝ 1</span>
          </button>
    </div>

  </div>
</div>

        <div>
          
        
          
         
        </div>
        



      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




// --------------- page


const BerrycardsPage = () => (
  
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

<h2><LogoPepper/> Berry Cards</h2>{" "}

</div>

    <p>
        Berry Cards 
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
  <Tabs defaultActiveKey="top" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="recent" title="Recent">
    
    



    <CardPager/>    
  </Tab>
  <Tab eventKey="vote" title="Vote">
    <Voters/>
    <CardPager/>    
  </Tab>
  <Tab eventKey="top" title="Top">
   
   
  <div className="containter">
{/* <CardItem/>
<CardItem/>
<CardItem/> */}



</div>




<div className="container mb-8">
      <div className="row mb-8">
   
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

      </div>
    </div>




<CardPager/>    
  </Tab>
  <Tab eventKey="stats" title="Stats">
Stats Page
  </Tab>
  <Tab eventKey="profile" title="Profile" disabled>
n/a
  </Tab>
</Tabs>

</div>
</div>







  </div>    
    
);

export default BerrycardsPage;
