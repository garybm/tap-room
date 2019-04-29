import React from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './ImageUpload';


function Keg(props){


  let kegInformation =
    <div className="mainContainer">
      <style jsx>{`
           display: grid;
           grid-template-columns: repeat(2, 1fr);
           grid-gap: 1%;
           max-width:80vw;
           margin-left: 10%;
           background-color: #ddc6b6;
           color: black;

          .details {
            display: flex;
            flex-direction: column;
            border-left: 2px white solid;
            padding-left: 5%;
            padding-top: 5%;
          }
          .mainContainer {
            border: 2px white solid;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          img {
            width: 250px;
            height: 250px;
            align-self: center;
          }
          button {
            font-size: 1em;
            height: 40px;;
            width: 25%;
            align-self: center;
            padding: 1.5%;
            margin:10px;
            background-color: #E59333;
            border-radius: 5px;
            color: white;
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
      <ImageUpload/>
      <div className= "details">
        <p>Brand: {props.brand}</p>
        <p>Keg Price: {props.price}</p>
        <p>Kombucha Flavor: {props.flavor}</p>
        <p>Added: {props.formattedWaitTime}</p>
        <button>Edit</button>
      </div>
    </div>;


  if( props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onKegSelection({ brand: props.brand, price: props.price, flavor: props.flavor, formattedWaitTime: props.formattedWaitTime});}}>
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
  onKegSelection: PropTypes.func
};

export default Keg;
