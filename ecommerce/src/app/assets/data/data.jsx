import { BsCurrencyDollar } from "react-icons/bs";
import { TbCurrencyEuro } from "react-icons/tb";
import { BsCurrencyYen } from "react-icons/bs";
import apollo from '../img/image.jpg'
import short from '../img/image1.jpg'
import running from '../img/image2.jpg'
import shirt from '../img/image2,jpg'

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



export const StoreItems = [
  {
    id: 1,
    Image: apollo,
    name: "Apollo Running Short",
    price: "USD",
  },
  {
    id: 2,
    image: short,
    name: "Apollo Running Short",
    currency: "USD",
  },
  {
    id: 3,
    image: running,
    name: "Apollo Running Short",
    currency: "USD",
  },
  {
    id: 4,
    image: shirt,
    name: "Apollo Running Short",
    currency: "USD",
  }
];
