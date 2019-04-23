import React from 'react'
import hero4 from '../assets/images/hero4.jpg'

function NewKegForm(){
  return (
      <div>
        <style jsx>{`
            form {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              position: absolute;
              top: 75%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              width:50%;
              height: 60%;
              padding: 5%;
              background-color: rgba(0,0,0, 0.5); /* Black w/opacity/see-through */
            }
            button {
              // font-size: 2em;
              width: 20%;
              height: 10%;
              // margin-top: 5%;

            }
            button:hover {
              background-color: #CD564F;
              color: white;
              cursor: pointer;
            }
            input, textarea {
              height: 10%;
              background-color:transparent;
              color: white;
              border: 1px solid white;
              background-color: rgba(0,0,0, 0.6);
            }
            textarea {
              height: 30%;
            }
            hr {
              color: black;
            }

            `}</style>
      <form>
        <p>Add new kegs to the inventory</p>
        <hr></hr>
    <p>Upload image</p>
    <button>Upload</button>
        <p>Kombucha Brand Name: </p>
        <input
          type='text'
          id='brands'
        />
        <p>Enter the flavor: </p>
        <input
          type='text'
          id='flavor'
        />
        <p>Keg's Price: </p>
        <input
          type='text'
          id='price'
        />
        <br></br>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default NewKegForm
