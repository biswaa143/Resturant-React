import React, { useState, useEffect } from "react";

import Button from "../UI/Button"
import Header from "./Header";
import Table from "./Table/Table";

const form = (props) => {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDish, setEnteredDish] = useState("");

  // useEffect(() => {
  //   setFormIsValid(
  //     enteredId.trim().length > 0 &&
  //       enteredPrice.includes(Number) &&
  //       enteredDish.trim().length > 3
  //   );
  // }, [enteredId, enteredPrice, enteredDish]);

  const IdChangeHandler = (event) => {
    setEnteredId(event.target.value);
    // console.log('enteredId');
  };

  const PriceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    // console.log('enteredPrice');
  };

  const DishChangeHandler = (event) => {
    setEnteredDish(event.target.value);
    // console.log('enteredDish');
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      orderid: enteredId,
      price: enteredPrice,
      dish: enteredDish,
    };
    console.log(expenseData);
    setEnteredId("");
    setEnteredPrice("");
    setEnteredDish("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="orderid">Unique Order Id</label>
        <input
          type="orderid"
          id="orderid"
          value={enteredId}
          onChange={IdChangeHandler}
        />

        <label htmlFor="price">Choose Price</label>
        <input
          type="price"
          id="price"
          value={enteredPrice}
          onChange={PriceChangeHandler}
        />

        <label htmlFor="dish">Choose Dish</label>
        <input
          type="text"
          id="dish"
          value={enteredDish}
          onChange={DishChangeHandler}
        />

        {/* <label htmlFor="table">Choose a Table</label>
        <select name="table" id="table">
          <option value="select">Select One</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select> */}
        <Table />
        <Button />
        <Header />
      </div>
    </form>
  );
};

export default form;
