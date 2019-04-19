import React from 'react'
import Keg from './Keg'

var availableKegs = [
  {
    brand: 'Kevita Master Brew Kombucha',
    price: '$200.00',
    flavor: 'Ginger'
  },
  {
    brand: 'Humm Kombucha',
    price: '$160.00',
    flavor: 'Lemon Ginger'
  },
  {
    brand: 'Kombucha Wonder Drink Traditional',
    price: '$160.00',
    flavor: 'Essense Of Lemon'
  },
  {
    brand: 'B-tea Kombucha',
    price: '$160.00',
    flavor: 'Green Tea'
  },
  {
    brand: 'Tealixer Herbal Kombucha',
    price: '$160.00',
    flavor: 'Herbal'
  },
  {
    brand: 'Brew Dr. Kombucha',
    price: '$160.00',
    flavor: 'Ginger'
  },
  {
    brand: 'Health-Ade Kombucha',
    price: '$160.00',
    flavor: 'Beet'
  },
  {
    brand: 'Live Kombucha Soda',
    price: '$160.00',
    flavor: 'Blueberry'
  },
  {
    brand: 'High Country Kombucha',
    price: '$160.00',
    flavor: 'Passion Flower'
  },
  {
    brand: 'Bucha',
    price: '$160.00',
    flavor: 'Blood Orange'
  }
];

function KegList(){
  return (
    <div>
      <hr/>
      {availableKegs.map((keg, index) =>
        <Keg
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          key={index}/>
      )}
    </div>
  )
  console.log(availableKegs);
}

export default KegList;
