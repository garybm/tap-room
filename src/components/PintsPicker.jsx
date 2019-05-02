import React from 'React';
import numberPints from '../data/pintsData.js';

function PintsPicker () {
  
  return (
    <div>
      <label htmlFor="size-options">Total number of pints:</label>
      <select>
        <option>1</option>
        <option>2</option>
      </select>
    </div>
  )
}

export default PintsPicker;
