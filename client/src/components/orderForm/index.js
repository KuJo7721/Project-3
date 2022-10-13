import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { REMOVE_ORDER, ADD_ORDER } from '../../utils/mutations';
import { QUERY_ORDERS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const OrderForm = () => {
  const [widthInput, setWidth] = useState(0);
  const [heightInput, setHeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [text, setText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addOrder, { error }] = useMutation(ADD_ORDER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {

      let width = parseInt(widthInput)
      let height = parseInt(heightInput)
      const { data } = await addOrder({
        variables: {
         width, height, price, text
        },
      });
      console.log(data)

      setText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'text' && value.length <= 200) {
      setText(value);
      setCharacterCount(value.length);
    }

    // Based on the input type, we set the state of either email, username, and password
    if (name === 'widthInput') {
      setWidth(value);
    } else if (name === 'heightInput') {
      setHeight(value);
    } 
  };

  return (
    <div>
      <h3>Place your order here</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="text"
                placeholder="Patch Text"
                value={text}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <input
                name="widthInput"
                type = "number"
                placeholder="width in inches"
                value={widthInput}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12 col-lg-9">
              <input
                name="heightInput"
                type = "number"
                placeholder="Height in inches"
                value={heightInput}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>
            {/* <div className="col-12 col-lg-9">
              <textarea
                name="text"
                placeholder="Patch Text"
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div> */}

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Place Order
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default OrderForm;
