import React from 'react'
import Keg from './Keg'
import { Link } from 'react-router-dom'
import hero5 from '../assets/images/hero5.jpg'
import keg from '../assets/images/keg.png'

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
]

function KegList(){
  const styles={
    display: 'grid',
    gridTemplateColumns: 'repeat(2,2fr)',
    gridGap: '2%'
  }

  const flex={
    display: 'flex',
    flexDirection:'column',
    width: '50%',
    backgroundColor: 'pink',
    border: '1px solid black'
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
