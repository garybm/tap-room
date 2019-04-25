import React from 'react'
import Keg from './Keg'
import { Link } from 'react-router-dom'
import hero5 from '../assets/images/hero5.jpg'
import keg from '../assets/images/keg.png'
import availableKegs from './mock-data.js'


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
