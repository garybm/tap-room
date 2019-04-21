import React from 'react'

function EditKeg() {
  return(
    <div>
      <form>
        <p>Kombucha Brand Name: </p>
        <input
          type='text'
          id='brands'
          placeholder='Brand'/>
        <p>Enter the flavor: </p>
        <input
          type='text'
          id='flavor'
          placeholder='Flavor'/>
        <p>Keg's Price: </p>
        <input
          type='text'
          id='price'
          placeholder='Enter the price'/>
        <br></br>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default EditKeg
