import React from 'react'
import Ticket from './Keg'

var avialableKegs = [
  {
    brand: 'Kevita Master Brew Kombucha',
    name: '',
    price: '$200.00';
    flavor: 'Ginger'
  },
  {
    brand: 'Humm Kombucha',
    name: '',
    price: '',
    flavor: 'Lemon Ginger'
  },
  {
    brand: 'Kombucha Wonder Drink Traditional',
    name: '',
    price: '';
    flavor: 'Essense Of Lemon'
  }
  {
    brand: 'B-tea Kombucha',
    name: '',
    price: '';
    flavor: 'Green Tea'
  }
  {
    brand: 'Tealixer Herbal Kombucha',
    name: '',
    price: '';
    flavor: 'Herbal'
  }
  {
    brand: 'Brew Dr. Kombucha',
    name: '',
    price: '';
    flavor: 'Ginger'
  }
  {
    brand: 'Health-Ade Kombucha',
    name: '',
    price: '';
    flavor: 'Beet'
  }
  {
    brand: 'Live Kombucha Soda',
    name: '',
    price: '';
    flavor: 'Blueberry'
  }
  {
    brand: 'High Country Kombucha',
    name: '',
    price: '';
    flavor: 'Passion Flower'
  }
  {
    brand: 'Bucha',
    name: '',
    price: '';
    flavor: 'Blood Orange'
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
