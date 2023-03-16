import React from "react";

const Button = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };
  return (
    <div>
      <button type="submit">Add To Bill</button>
      {/* <table border={1} width="30%" cellPadding={10}>
        <tbody>
          <tr>
            <td>Order Id</td>
            <td>Price</td>
            <td>Dish</td>
          </tr>
          {
            enteredId.map((info,ind) => {
              return (
                <tr>
                  <td>{info.id}</td>
                  <td>{info.price}</td>
                  <td>{info.dish}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table> */}
    </div>
  );
};

export default Button;
