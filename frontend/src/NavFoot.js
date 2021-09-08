// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

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

import logo_avacado from './assets/berry-avacado.svg';
import logo_banana from './assets/banana.svg';
import logo_pepper from './assets/pepper.svg';
import logo_berry from './assets/berry.svg';

function LogoAvacado(props) {
  let currApp = useSelector(selectApp);
  return <>
  <h5>
  <img className="berrylogo-icon icon-footer ico-avacado" src={logo_avacado} alt="berryclub Logo" />
    {currApp}</h5>
  <p>Eat   <img className="berrylogo-icon icon-footer ico-avacado" src={logo_avacado} alt="berryclub Logo" />- draw pixels - farm <img className="berrylogo-icon icon-footer ico-banana" src={logo_banana} alt="berryclub Logo" /> - talk through <img className="berrylogo-icon icon-footer ico-berry" src={logo_berry} alt="berryclub Logo" /></p>
  {/* <div className="site-tagline">Berry Club - eat 🥑 - draw pixels - farm 🍌 - talk through 🥝"</div> */}


  </>;
}
function LogoBanana(props) {
  let currApp = useSelector(selectApp);
 return <>
 <h5>  <img className="berrylogo-icon icon-footer ico-banana" src={logo_banana} alt="berryclub Logo" />
  Berry Farm</h5>
  </>;
}
function LogoCards(props) {
  let currApp = useSelector(selectApp);
 return <>
 <h5>  <img className="berrylogo-icon icon-footer ico-pepper" src={logo_pepper} alt="berryclub Logo" />
  Berry Cards</h5>
  </>;
}
function LogoFm(props) {
  let currApp = useSelector(selectApp);
 return <>
 <h5>  <img className="berrylogo-icon icon-footer ico-berry" src={logo_berry} alt="berryclub Logo" />
  Near FM</h5>
  </>;
}



const NavFoot = () => (
<>
<div className="container foot-holder">
  <footer className="row row-cols-5 py-5 my-0">
    
    <div className="col">      
      {/* <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none"> */}
      <a href="/" className="d-inline-flex flex-column align-items-left mb-3 link-dark text-decoration-none">
     <LogoAvacado/><br/>

     </a>

    </div>

    <div className="col">

    </div>

    <div className="col">
      <LogoBanana/>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Buy</a></li>
        <li className="nav-item mb-2"><a href="/stats" className="nav-link p-0 text-muted">Stats</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div className="col">
      <LogoCards/>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Recent</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Vote</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Stats</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div className="col">
      <LogoFm/>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Discover</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Profile</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>
  </footer>
</div>



<footer className="container">
        <p className="footer-text text-muted">© 2021 <a href="/" className="text-muted">BerryClub.io</a>  All Rights Reserved. <a href="/privacy" className="text-muted">Privacy</a> · <a href="/terms" className="text-muted">Terms</a></p>
      </footer>

    </>
);

export default NavFoot;