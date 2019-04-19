import React from 'react';
import keg from '../assets/images/keg.png';

function NewKegForm(){
  return (
    <div className="mainDiv">
      <style jsx>{`
          form{
            text-align: center;
          }
          .mainDiv {
            width: 50%;
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
