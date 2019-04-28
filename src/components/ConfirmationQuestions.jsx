import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return(
    <div>
      <style jsx>
      {`
        div {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        button {
          width: 100px;
          font-size: 16px;
          border-radius: 5px;
          height: 30px;
          border: none;
        }

        button:hover {
          background-color: #CD564F;
          color: white;
          cursor: pointer;
        }
        `}</style>
      <p>Are you sure you wanna add a new KEG?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
