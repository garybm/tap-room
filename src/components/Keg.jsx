import React from 'react';
import PropTypes from 'prop-types';


function Keg(props){


  const mainStyle ={
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '50% auto',
    gridTemplateRows: 'repeat(4,100px)',
    gridGap: '1%',
    margin: '50px'
  };

  let kegInformation =
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
        <p>Brand: {props.brand}</p>
        <p>Keg Price: {props.price}</p>
        <p>Kombucha Flavor: {props.flavor}</p>
        <h4>{props.formattedWaitTime}</h4>
      </div>
    </div>;
  if( props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onKegSelection({brand: props.brand, price: props.price, flavor: props.flavor, formattedWaitTime: props.formattedWaitTime});}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor:PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Keg;
