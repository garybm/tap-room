import React from 'react'
import hero4 from '../assets/images/hero4.jpg'

function NewKegForm(){

  const styles = {
    width:'100%'
  }
  return (
      <div style={styles}>
        <style jsx>{`
            form {
              border: 1px solid white;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              color: white;
              width:75%;
              margin-left: 10%;
              margin-top: 2%;
              padding: 2%;
            }
            button {
              width: 15%;
              font-size: 1em;
            }

            button:hover {
              background-color: #CD564F;
              color: white;
              cursor: pointer;
            }
            input, textarea {
              width:25%;
              height: 16px;;
              background-color:transparent;
              color: white;
              border: 1px solid white;
            }
            hr {
              color: white;
            }

            `}</style>
          <div>
            <form>
              <h1>Add new kegs to the inventory</h1>
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
    </div>
  )
}

export default NewKegForm
