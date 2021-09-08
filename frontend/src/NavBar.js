import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Globals';
import './Globals'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal'; 
import Card from 'react-bootstrap/Card'; 

import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaInfoCircle} from 'react-icons/fa';

import { Counter } from './features/counter/Counter';
import styles from './features/counter/Counter.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { Berryuser } from './features/berryuser/Berryuser';


import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectUser,
  selectApp,
} from './features/berryuser/berryuserSlice';

import Overlay from 'react-bootstrap/Overlay'


//////

import logo_avacado from './assets/berry-avacado.svg';
import logo_banana from './assets/banana.svg';



function LogoAvacado(props) {
  return <img className="berrylogo-icon" src={logo_avacado} alt="berryclub Logo" />;
}
function LogoBanana(props) {
  return <img className="berrylogo-icon" src={logo_banana} alt="berryclub Logo" />;
}

const Avocado = (<span role="img" aria-label="avocado" className="berry">🥑</span>);
const Banana = (<span role="img" aria-label="banana" className="berry">🍌</span>);
const Cucumber = (<span role="img" aria-label="cucumber" className="berry">🥒</span>);
const Pepper = (<span role="img" aria-label="pepper" className="berry">🌶️</span>);
// buy Modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl berrybuy"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        <LogoAvacado/> Buy Avacados
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

//// Conditions...
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return "userABC123.NearNet";
}

function GuestGreeting(props) {
  return "Log in";
}




export function NavBar() {


  
  let currUser = useSelector(selectUser);
  let currApp = useSelector(selectApp);

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const target = React.useRef(null);
  
  const [modalShow, setModalShow] = React.useState(false);
  

  return (

// const NavBar = () => (
    // <>
  <Navbar collapseOnSelect expand="lg" bg="navbar-light rounded berrybar" variant="light">
  <Container>
  <Navbar.Brand href="/" id="berrybrand">
    <LogoAvacado/>
    {currApp}
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" id="mmenu">
    
    <Nav.Link href="/berryfarm">Berry Farm</Nav.Link>
      <Nav.Link  href="reffinance">REF Finance</Nav.Link>
      <Nav.Link href="/berrycards">Berry Cards</Nav.Link>
      <Nav.Link href="/nearfm" className="active">Near FM</Nav.Link>
    
    </Nav>

    <Nav id="nearuser">
    <>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
      

      <Berryuser name="navheader"/ >

    {/* {currUser} */}
<NavDropdown title="berryuser123.near" id="collasible-nav-dropdown" className="userBtn">
        <NavDropdown.Item  onClick={() => setModalShow(true)}><LogoAvacado/> Buy Avacados</NavDropdown.Item>
        {/* <NavDropdown.Item  onClick={() => setModalShow(true)}><LogoBanana/>  Buy Bananas 123 64 321 313</NavDropdown.Item> */}
        <NavDropdown.Divider />
        <NavDropdown.Item href="/acount"><FaUserCircle/>  Account</NavDropdown.Item>
        <NavDropdown.Item href="/about"><FaInfoCircle/> About {currApp}</NavDropdown.Item>
        <NavDropdown.Item href="/logout"><FaSignOutAlt/> Log Out </NavDropdown.Item>
      </NavDropdown>
  <Nav>
    
  
          {/* <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
          </Button> */}

      {/* <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay> */}
      </Nav>



    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


    // </>
// );

);
}

 export default NavBar;

