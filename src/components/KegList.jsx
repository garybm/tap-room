import React from 'react'
import Keg from './Keg'
import { Link } from 'react-router-dom'
import hero5 from '../assets/images/hero5.jpg'
import keg from '../assets/images/keg.png'

var availableKegs = [
  {
    image: 'kevita.jpg',
    brand: 'Kevita Master Brew Kombucha',
    price: '$200.00',
    flavor: 'Ginger'
  },
  {
    image: 'humm.jpg',
    brand: 'Humm Kombucha',
    price: '$160.00',
    flavor: 'Lemon Ginger'
  },
  {
    image: 'wonder.jpg',
    brand: 'Kombucha Wonder Drink Traditional',
    price: '$160.00',
    flavor: 'Essense Of Lemon'
  },
  {
    image: 'b-tea.jpg',
    brand: 'B-tea Kombucha',
    price: '$160.00',
    flavor: 'Green Tea'
  },
  {
    image: 'tealixer.jpg',
    brand: 'Tealixer Herbal Kombucha',
    price: '$160.00',
    flavor: 'Herbal'
  },
  {
    image: 'dr-brew.jpg',
    brand: 'Brew Dr. Kombucha',
    price: '$160.00',
    flavor: 'Ginger'
  },
  {
    image: 'health-aide.jpg',
    brand: 'Health-Ade Kombucha',
    price: '$160.00',
    flavor: 'Beet'
  },
  {
    image: 'live.jpg',
    brand: 'Live Kombucha Soda',
    price: '$160.00',
    flavor: 'Blueberry'
  },
  {
    image: 'high-country.jpg',
    brand: 'High Country Kombucha',
    price: '$160.00',
    flavor: 'Passion Flower'
  },
  {
    image: 'Bucha.jpg',
    brand: 'Bucha',
    price: '$160.00',
    flavor: 'Blood Orange'
  }
]

function KegList(){
  const styles={
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div>
      <div>
        {availableKegs.map((keg, index) =>
          <div>
            <Keg
              image={keg.image}
              brand={keg.brand}
              price={keg.price}
              flavor={keg.flavor}
              key={index}/>
          </div>
        )}
      </div>

    </div>
  )
}

export default KegList
