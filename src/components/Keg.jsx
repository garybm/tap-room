import React from 'react'
import PropTypes from 'prop-types'

function Keg(props){

  return (
    <div>
      <style global jsx>{`
      div {
        background-color: pink;
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
      <p> {props.brand} </p>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.flavor}</p>
      <hr/>
    </div>
  )
}

Ticket.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor:PropTypes.string.isRequired
}

export default Keg;
