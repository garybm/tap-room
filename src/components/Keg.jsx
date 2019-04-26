import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Keg(props){


  const mainStyle ={
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '50% auto',
    gridTemplateRows: 'repeat(4,100px)',
    gridGap: '1%',
    margin: '50px'
  }


  return (
    <div>
      <div style={mainStyle}>
        <style jsx>{`
            img {
              width: 300px;
              height: 300px;
            }
                button {
                  font-size: 1em;
                  height: 50%;
                  width: 25%;
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
        <div>
          <img src={require(`../assets/images/${props.image}`)}></img>
        </div>
        <div>
          <p>Brand: {props.brand}</p>
          <p>Keg Price: {props.price}</p>
          <p>Kombucha Flavor: {props.flavor}</p>
          <p>Pints left on this Keg:</p>
          <Link to="/editkeg"><button><a>Edit Keg Info</a></button></Link><Link to="/editkeg"><button>Pints</button></Link>
        </div>
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
