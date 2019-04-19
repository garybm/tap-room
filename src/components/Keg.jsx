import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  return (
    <div>
      <style global jsx>{`
      .tableKeg {
        border: 1px solid black;
        text-align: center;
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
