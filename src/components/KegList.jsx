import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props){

  return (

    <div>
      <style jsx>{`
          margin-bottom: 10%;
          `}</style>
      {props.kegList.map((keg) =>
        <div>
          <Keg
            brand={keg.brand}
            price={keg.price}
            flavor={keg.flavor}
            formattedWaitTime={keg.formattedWaitTime}
            currentRouterPath={props.currentRouterPath}
            key={keg.id}
            onKegSelection={props.onKegSelection}/>
        </div>
        )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func

};


export default KegList;
