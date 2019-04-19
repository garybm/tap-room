import React from 'react';

function NewKegForm(){
  return (
    <div className="mainDiv">
      <style jsx>{`
          form{
            text-align: center;
          }
          .mainDiv {
            background-color: green;
            width: 100%;
            height: 100vw;
          }
          `}</style>
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
         <button type='submit'>Add</button>
     </form>
    </div>
  )
}

export default NewKegForm;
