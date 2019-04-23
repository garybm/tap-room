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
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '2%',
    textAlign: 'center'
  }

  const flex={
    display: 'flex',
    flexDirection:'column',
    width: '50%',
    backgroundColor: 'gray',
    border: '1px solid black',
    textAlign: 'center'
  }
  return (
    <div>
      <div>
        <img style={{width:'100%', height:'700px'}}src={hero5}/>
      </div>
      <div>
        <style jsx>{`
            h1 {
              background-color: rgba(0,0,0, 0.6); /* Black w/opacity/see-through */
              color: white;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 2;
              width: 80%;
              padding: 40px;
              text-align: center;
              align-self: center;
              font-size: 100px;
            }
            `}</style>
        <h1>Kombucha Inventory</h1>
      </div>
      <div style={styles}>
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
