import React from 'react'
import Keg from './Keg'
import hero5 from '../assets/images/hero5.jpg'
import masterKegList from './mock-data.js'


function KegList(){

  return (
    <div>
      <div>
        <h1>This is a title</h1>
        <h2> This is another header</h2>
      </div>
      <div>
        {masterKegList.map((keg, index) =>
          <div>
            <style jsx>{`
                border: 1px solid white;
                margin: 30px;
                    `}
            </style>
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
