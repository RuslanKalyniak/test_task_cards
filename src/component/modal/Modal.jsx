import React, { useState } from 'react';
import propTypes from 'prop-types';
import './modal.css';

export const Modal = ({ addmodal, modal }) => {
  const [answer] = useState(true);

  return (
    <div hidden={modal}>
      <div className="modal">
        <div className="modal__content">
          Are you sure?
          <button
            type="button"
            className="button is-warning is-rounded buttonMy"
            onClick={() => {
              addmodal(answer);
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="button is-primary is-rounded buttonMy"
            onClick={() => {
              addmodal(!answer);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  addmodal: propTypes.func.isRequired,
  modal: propTypes.bool.isRequired,
};
