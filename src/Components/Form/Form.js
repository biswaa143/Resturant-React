import React from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Form.module.css";

const form = (props) => {
  return (
    <Card className={classes.form}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="orderid">Unique Order Id</label>
        <input type="orderid" id="orderid" />

        <label htmlFor="price">Choose Price</label>
        <input type="price" id="price" />

        <label htmlFor="dish">Choose Dish</label>
        <input type="text" id="dish" />

        <label htmlFor="table">Choose a Table</label>
        <select name="table" id="table"></select>
        <option value="select">Select One</option>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>

        <h1>Orders</h1>
        <h2>Table 1</h2>
        <h2>Table 2</h2>
        <h2>Table 3</h2>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Add to bill
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
