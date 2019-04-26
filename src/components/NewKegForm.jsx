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
            }
            h1 {
              align-self: center;
            }
            button {
              width: 15%;
              font-size: 16px;
              border-radius: 5px;
              height: 30px;
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
              background-color:transparent;
              color: white;
              border: 1px solid white;
            }
            hr {
              color: white;
              width: 90%;
            }

            `}</style>
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
        <p>Total number of pints</p>
          <select
            type='text'
            id='prints'
          >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        </select>
          <br></br>
          <button type='submit'>Add</button>
        </form>

    </div>
  )
}

export default NewKegForm
