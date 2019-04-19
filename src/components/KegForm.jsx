import React from 'react';

function KegForm(){
  return (
    <div>
      <form>
       <style jsx>{`
         form {
           text-align: center;
           position: absolute;
           top: 75%;
           left: 50%;
           transform: translate(-50%, -50%);
           color: white;
           width: 100%;
           height:75%;
         }
       `}</style>
       <input
         type='text'
         id='brands'
         placeholder='Enter Brand Name'/>
       <input
         type='text'
         id='flavor'
         placeholder='Enter Flavor'/>
         <input
           type='text'
           id='price'
           placeholder='Enter the price'/>
         <button type='submit'>Add</button>
     </form>
    </div>
  )
}

export default KegForm;
