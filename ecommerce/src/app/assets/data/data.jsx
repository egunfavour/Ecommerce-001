import { BsCurrencyDollar } from "react-icons/bs";
import { TbCurrencyEuro } from "react-icons/tb";
import { BsCurrencyYen } from "react-icons/bs";
import apollo from '../img/Image.jpg'
import short from '../img/Image1.jpg'
import running from '../img/Image2.jpg'
import shirt from '../img/Image3.jpg'

export const dropdownItems = [
  {
    id: 1,
    icon: <BsCurrencyDollar />,
    currency: "USD",
  },
  {
    id: 2,
    icon: <TbCurrencyEuro />,
    currency: "EUR",
  },
  {
    id: 3,
    icon: <BsCurrencyYen />,
    currency: "JPY",
  },
];



export const storeItems = [
  {
    id: 1,
    image: apollo,
    name: "Apollo Running Short",
    price: "50.00",
  },
  {
    id: 2,
    image: short,
    name: "Apollo Running Short",
    price: "50.00",
  },
  {
    id: 3,
    image: running,
    name: "Apollo Running Short",
    price: "50.00",
  },
  {
    id: 4,
    image: shirt,
    name: "Apollo Running Short",
    price: "50.00",
  }
];
