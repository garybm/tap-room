import React from 'react';
import PropTypes from 'prop-types';
import keg from '../assets/images/keg.png';


function Keg(props){


  let kegInformation =
    <div className="mainContainer">
        <style jsx>{`
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           grid-gap: 1%;
           max-width:100vw;
           grid-border: 1px solid white;

          .details {
            display: flex;
            flex-direction: column;
          }


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
        <img className="keg" src={keg}/>
        <div className= "details">
          <p>Brand: {props.brand}</p>
          <p>Keg Price: {props.price}</p>
          <p>Kombucha Flavor: {props.flavor}</p>
          <h4>{props.formattedWaitTime}</h4>
        </div>
      </div>


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
