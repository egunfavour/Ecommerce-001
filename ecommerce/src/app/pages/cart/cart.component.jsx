
import React from "react";
import CategoryHeading from "../../components/molecules/category-head/category-head.component";
import Navbar from "../../components/molecules/navbar/navbar.components";
import CartItems from "../../components/organisms/cart/cart-items.components";


const Cart = () => {
  return (
    <div>
      <Navbar />
      <CategoryHeading
        fontSize="32px"
        textColor="#000"
        fontWeight="700"
        textTransform="uppercase"
        lineHeight="40px"
        name="Cart"
      />
    <CartItems />
    </div>
  );
};

export default Cart;
