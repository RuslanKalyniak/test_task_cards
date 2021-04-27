/* eslint-disable no-console */
import React, { useState } from 'react';
import './Card.css';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { CounterCard } from './CounetCard';

const todoList = [{
  id: 1,
  name: 'article 1',
  label: 'Lorem',
  price: 25,
},
{
  id: 2,
  name: 'article 2',
  label: 'Lorem ',
  price: 35,
},
{
  id: 3,
  name: 'article 3',
  label: 'Lorem',
  price: 45,
}];

export const HomePage = ({ addToCart, removeFromCart }) => {
  const [price, setPrice] = useState(0);

  const addLabel = (priceNew) => {
    const totalPrice = price + priceNew;

    setPrice(totalPrice);
  };

  const removeLabel = (priceNew) => {
    if (price > 0) {
      setPrice(price - priceNew);
    }
  };

  const allBuy = (id, name) => {
    addToCart(id, name);
  };

  const deleleBuy = (id) => {
    removeFromCart(id);
  };

  return (

    <div>
      <CounterCard totalPrice={price} />
      <div className="containerMy">
        {
          [...todoList].map(ele => (
            <div className="card cardMy" key={uuidv4()}>
              <header className="card-header">
                <p className="card-header-title">
                  {ele.name}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  Label:
                  {' '}
                  {ele.label}
                </div>
                <div>
                  Price:
                  {' '}
                  {ele.price}
                </div>
              </div>
              <footer className="card-footer navBar">
                <div className="buttons">
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={() => {
                      addLabel(ele.price);
                      allBuy(ele.id, ele.name);
                    }}
                  >
                    add
                  </button>
                  <button
                    type="button"
                    className="button is-link"
                    onClick={() => {
                      removeLabel(ele.price);
                      deleleBuy(ele.id);
                    }}
                  >
                    remove
                  </button>
                </div>
              </footer>
            </div>
          ))
        }
      </div>
    </div>
  );
};

HomePage.propTypes = {
  addToCart: propTypes.func.isRequired,
  removeFromCart: propTypes.func.isRequired,
};
