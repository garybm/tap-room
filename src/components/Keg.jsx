import React from 'react';
import PropTypes from 'prop-types';
import keg from '../assets/images/keg.png';
import { Link } from 'react-router-dom';


function Keg(props){
  var styles ={
    border: '1px solid black'
  }
  return (
      <div style={styles}>
        <p>Brand: {props.brand}</p>
        <p>Keg Price: {props.price}</p>
        <p>Kombucha Flavor: {props.flavor}</p>
        <p>Pints left on this Keg:</p>
        <Link to="/editkeg"><button>Edit Keg Info</button></Link> | <button>Sold Pint</button>
    </div>
  )
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor:PropTypes.string.isRequired
}

export default Keg;
