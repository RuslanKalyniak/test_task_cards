import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './CounterCard.css';

export const CounterCard = ({ totalPrice }) => (
  <div className="conterMy">
    <article className="message is-primary">
      <div className="message-header">
        <p>YOUR CARD</p>
      </div>
      <div className="message-body">
        YOU BUY
        <p>
          Total Price:
          {totalPrice}
        </p>
      </div>
      <button
        type="button"
        className="button is-medium is-fullwidth is-link"
      >
        <Link to="/card">
          Go to your Basket
        </Link>
      </button>
    </article>
  </div>
);

CounterCard.propTypes = {
  totalPrice: propTypes.number.isRequired,
};
