import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Keg(props){
  var styles ={
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: '1px solid black'
  }


  return (
    <div>
      <div style={styles}>
        <style jsx>{`
            img {
              width: 100%;
            }
                button {
                  font-size: 1em;
                  height: 50%;
                  width: 50%;
                  align-self: center;
                  margin-top: 5%;
                  padding: 1.5%;
                  background-color: #E59333;
                }
                button:hover {
                  background-color: #CD564F;
                  color: white;
                  cursor: pointer;
                }
                a {
                  text-decoration: none;
                }
                  `}</style>
        <img src={require(`../assets/images/${props.image}`)}></img>
        <p>Brand: {props.brand}</p>
        <p>Keg Price: {props.price}</p>
        <p>Kombucha Flavor: {props.flavor}</p>
        <p>Pints left on this Keg:</p>
        <Link to="/editkeg"><button><a>Edit Keg Info</a></button></Link><Link to="/editkeg"><button>Pints</button></Link>
      </div>
    </div>
  )
}

Keg.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor:PropTypes.string.isRequired
}

export default Keg
