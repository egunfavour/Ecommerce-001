import React, { useState } from "react";
import PayStackPop from "@paystack/inline-js";
import { ButtonDiv, MainDiv, Submit } from "./form.styles";

const Form = () => {
  const [email, setEmail] = useState("");
  const [firtsname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [amount, setAmount] = useState("");
  const payWithPayStack = (e) => {
    e.preventDefault();
    const Paystack = new PayStackPop();
    Paystack.newTransaction({
      key: "",
    });
  };
  return (
    <MainDiv>
      <h3>Welcome to payment portal</h3>
      <form id="payment-form">
        <ButtonDiv className="form-group">
          <label htmlFor="firstname">firstname</label>
          <input
            type="text"
            id="first-name"
            value={firtsname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="enter your first name..."
          />
        </ButtonDiv>
        <ButtonDiv className="form-group">
          <label htmlFor="lastname">lastname</label>
          <input
            type="text"
            id="last-name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="enter your last name..."
          />
        </ButtonDiv>
        <ButtonDiv className="form-group">
          <label htmlFor="email">email address</label>
          <input
            type="email"
            id="email-address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email address..."
          />
        </ButtonDiv>
        <ButtonDiv className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="enter amount"
          />
        </ButtonDiv>
        <Submit>Submit</Submit>
      </form>
    </MainDiv>
  );
};

export default Form;
