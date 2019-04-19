import React from 'react'
import Ticket from './Keg'

var avialableKegs = [
  {
    brand: '',
    name: '',
    price: '';
    flavor: ''
  },
  {
    brand: '',
    name: '',
    price: '';
    flavor: ''
  },
  {
    brand: '',
    name: '',
    price: '';
    flavor: ''
  }
]

function KegList(){
  return (
    <div>
      <hr/>
      {availableKegs.map((keg, index) =>
        <Keg
          brand={keg.brand}
          name={keg.name}
          price={keg.price}
          flavor={keg.flavor}
          key={index}/>
      )}
    </div>
  )
}

export default KegList;
