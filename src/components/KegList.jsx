import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'


function KegList(props){

  return (
    <div>
      <div>
        <h1>This is a title</h1>
        <h2> This is another header</h2>
      </div>
        <style jsx>{`
                border: 1px solid white;
                margin: 30px;
                    `}
        </style>
        {props.kegList.map((keg, index) =>
          <Keg
            brand={keg.brand}
            price={keg.price}
            flavor={keg.flavor}
            key={index}
            currentRouterPath={props.currentRouterPath}/>
        )}
    </div>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
}


export default KegList
