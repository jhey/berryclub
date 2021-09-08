import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  userided,
  selectUser,
  selectApp,
  selectLogged,
  
} from './berryuserSlice';
import styles from './Berryuser.module.css';


import NavDropdown from 'react-bootstrap/NavDropdown';

export function Berryuser(props) {
  const isBanner = props.name

  const count = useSelector(selectCount);
  const user = useSelector(selectUser);
  const appTile = useSelector(selectApp);

  const loggedin = useSelector(selectLogged);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('12');

  const incrementValue = Number(incrementAmount) || 0;
  
  // in the nave bar
  if (isBanner === "navheader") {
    return(
      <>
              {/* <span className={styles.value}>{user}</span> */}
      </>
    )
  }

  return (
  <>
    <div class="userberryfeature">
      
  

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        
        <span className={styles.value}>{count}</span>
        <span className={styles.value}>{user}</span>


     
      {/* </div>
      <div className={styles.row}> */}
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          AddAsync
        </button>
        <button 
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add Odd
        </button>
      </div>
    </div>
  
  </>
  );
}
