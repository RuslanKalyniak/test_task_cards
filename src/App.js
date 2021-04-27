
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { HomePage } from './component/HomePage';
import { CardEdit } from './component/CardEdit';

export const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, name) => {
    setCart([
      ...cart,
      {
        id: uuidv4(),
        name,
      },
    ]);

    localStorage.setItem('id', JSON.stringify(cart));
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(ele => ele.id !== id));

    localStorage.setItem('id', JSON.stringify(cart));
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('id')));
  }, []);

  return (
    <>
      <div className="navBar">
        <h1>
          <button type="button" className="button is-primary is-rounded">
            <Link to="/home">
              Shop
            </Link>
          </button>
        </h1>
        <h1>
          <button type="button" className="button is-primary is-rounded">
            <Link to="/card">
              BasketEdit
            </Link>
          </button>
        </h1>
        <h1>
          <button type="button" className="button is-primary is-rounded">
            <Link to="/">
              Start
            </Link>
          </button>
        </h1>
      </div>

      <Switch>
        <Route path="/home" component={HomePage}>
          <HomePage addToCart={addToCart} removeFromCart={removeFromCart} />
        </Route>
        <Route path="/card" component={CardEdit}>
          <CardEdit carts={cart} removeFromCart={removeFromCart} />
        </Route>
      </Switch>
    </>
  );
};
