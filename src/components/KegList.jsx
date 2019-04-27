import React from 'react';
import Keg from './Keg';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function KegList(props){

  return (

    <div>

      <style jsx>{`
          // margin-bottom: 5%;
          button {
            font-size: 24px;
            border-radius: 2px;
            height: 55px;
            width:200px;
            padding: 5px;
            align-self: center;
            background-color: #E59333;
            color: white;
            border: none;
          }

          button:hover {
            background-color: #CD564F;
            color: white;
            cursor: pointer;
          }
          .heading {
            display: flex;
            flex-direction: column;
            justify-content:center;
            justify-content: space-around;
            background-color: white;
            color: gray;
            text-align: center;
            height:200px;
            background-color: #ddc6b6;
          }
          p {
            margin: 0;
          }
          `}</style>
      <div className="heading">
        <p> Please select "Add New Keg" to enter a new keg to the inventory or click "Edit" to edit an existing one</p>
        <Link to="/newkeg" ><button>Add New Keg</button></Link>
      </div>
      {props.kegList.map((keg, key) =>
        <div>
          <Keg
            brand={keg.brand}
            price={keg.price}
            flavor={keg.flavor}
            formattedWaitTime={keg.formattedWaitTime}
            currentRouterPath={props.currentRouterPath}
            key={keg.id}
            onKegSelection={props.onKegSelection}/>
        </div>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func

};


export default KegList;
