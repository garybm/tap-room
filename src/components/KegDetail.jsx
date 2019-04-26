import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  return (
    <div>

      <hr/>
      <h1>{props.selectedKeg.brand}</h1>
      <h2>Added {props.selectedKeg.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedKeg.price}</em></h4>
      <h4><em>{props.selectedKeg.flavor}</em></h4>
      <hr/>
    </div>
  );
}

KegDetail.propTypes ={
  selectedKeg: PropTypes.object
};

export default KegDetail;
