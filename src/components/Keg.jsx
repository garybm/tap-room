import React from 'react';
import PropTypes from 'prop-types';
import kegtwo from '../assets/images/kegtwo.jpg';
import { Link } from 'react-router-dom';

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

      img {
        width:75%;
      }

    `}</style>
      <div className="tableKeg">
        <img src={kegtwo}/>
        <p>Brand: {props.brand}</p>
        <p>Keg Price: {props.price}</p>
        <p>Kombucha Flavor: {props.flavor}</p>
        <p>Pints left on this Keg:</p>
        <Link to="/editkeg"><button>Edit Keg Info</button></Link> | <button>Sold Pint</button>
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
