import React from 'react';

import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



import '../Globals';

import "../styles/App.scss";

const StatsPage = () => (
    <div>



<div class="container">
  <div class="row">
    <div class="col">
    <h1>Berry Club STATS</h1>      
    <p>
        Berry Club is a DeFi app designed to let users have fun creating shared pixel art while farming token rewards. Berry Club achieves this with the elegant use of tokens called Avocados, Bananas, and Cucumbers. It’s also a great use of NEAR Protocol’s built-in features that aren’t found in other blockchains, such as automatic fee payments to smart contract creators. It started as a DeFi proof of concept, and has since grown into a popular community project on NEAR.
    </p>
    <br/>
    Read more: <a href="https://near.org/blog/funberryclub/">near.org/blog/funberryclub/</a>
    <br/>
    Read more II: <a href="https://near.org/blog/berry-club-part-ii/">near.org/blog/berry-club-part-ii/</a>
    </div>
    <div class="col">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wfTa-Kgw2DM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
    {/* <div class="col">
      Column
    </div> */}
  </div>
  </div>


</div>


    
    
);

export default StatsPage;
