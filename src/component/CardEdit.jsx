
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  Link,
} from 'react-router-dom';
import { Modal } from './modal/Modal';

export const CardEdit = ({ carts, removeFromCart }) => {
  const [modal, setModal] = useState(true);
  const [idremove, setIdremove] = useState('');

  const remove = (id) => {
    setIdremove(id);
  };

  const addmodal = (a) => {
    setModal(!modal);
    if (a) {
      removeFromCart(idremove);
    }
  };

  return (
    <div className="containerCarts">
      {
        (carts.length)
          ? carts.map(ele => (
            <div className="card cardMyCarts" key={uuidv4()}>
              <header className="card-header">
                <p className="card-header-title">
                  {ele.name}
                </p>
              </header>
              <button
                type="button"
                className="button is-link"
                onClick={() => {
                  remove(ele.id);
                  addmodal();
                }}
              >
                remove
              </button>
            </div>
          ))
          : (
            <div className="messageMy">
              <article className="message is-warning">
                <div className="message-header">
                  <p>your cart is empty</p>
                </div>
                <div className="message-body">
                  go back to the store and buy something
                </div>
                <div className="navBar">
                  <button
                    type="button"
                    className="button is-link is-rounded"
                  >
                    <Link to="/home">
                      Store
                    </Link>
                  </button>
                </div>
              </article>
            </div>
          )
      }
      <Modal addmodal={addmodal} modal={modal} />
    </div>
  );
};

CardEdit.propTypes = {
  carts: propTypes.objectOf.isRequired,
  removeFromCart: propTypes.func.isRequired,
};
