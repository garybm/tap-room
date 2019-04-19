import React from 'react';
import PropTypes from 'prop-types';
import keg from '../assets/images/keg.png';

function Keg(props){

  return (
    <div>
      <style global jsx>{`
      .tableKeg {
        border: 1px solid black;
        text-align: center;
        backgroundColor: pink;
      }
      h3 {
        color: white;
      }
      p:hover {
        color: white;
        cursor: pointer;
      }
    `}</style>
      <div className="tableKeg">
        // <img  style={{width:'100%'}} src={keg}/>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.flavor}</p>
      </div>
    </div>
  )
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor:PropTypes.string.isRequired
}

export default Keg;
