import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewKegForm(props){
  let _brand = null;
  let _flavor = null;
  let _price = null;


  function handleNewKegSubmission(event) {
    console.log(event);
    event.preventDefault();
    props.onNewKegCreation({brand: _brand.value, flavor: _flavor.value, price: _price.value, id: v4(), timeOpen: new Moment()});
    _brand.value = '';
    _flavor.value = '';
    _price.value = '';

  }

  return (
    <div>
      <style jsx>{`
          width:100%;
            form {
              font-size: 16px;
              border: 1px solid white;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              color: white;
              width:50%;
              margin-left: 25%;
              margin-top: 2%;
              padding: 2%;
              background-color: #ddc6b6;
            }
            h1 {
              align-self: center;
            }
            button {
              width: 15%;
              font-size: 16px;
              border-radius: 5px;
              height: 30px;
              border: none;
            }

            button:hover {
              background-color: #CD564F;
              color: white;
              cursor: pointer;
            }
            input, textarea, select{
              width:30%;
              height: 30px;
              font-size: 16px;
              background-color:white;
              color: black;
              border: 1px solid white;
            }
            hr {
              color: white;
              width: 90%;
            }
            `}</style>
      <form onSubmit={handleNewKegSubmission} >
        <h1>Add new kegs to the inventory</h1>
        <hr></hr>
        <p>Kombucha Brand Name: </p>
        <input
          type='text'
          id='brand'
          ref={(input) => {_brand = input;}}/>
        <p>Enter the flavor: </p>
        <input
          type='text'
          id='flavor'
          ref={(input) => {_flavor = input;}}/>
        <p>Keg's Price: </p>
        <input
          type='text'
          id='price'
          ref={(input) => {_price = input;}}/>
        <p>Total number of pints</p>
        <select
          type='text'
          id='pints'
        >
          <option>1</option>
          <option>2</option>
        </select>
        <br></br>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
