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
  },
  {
    id: 5,
    image: apollo,
    name: "Apollo Running Short",
    price: "50.00",
  },
  {
    id: 6,
    image: running,
    name: "Apollo Running Short",
    price: "50.00",
  }
];



export const cartItems = [
  {
    id: 1,
    image: apollo,
    brand: "Apollo",
    name: "Running Short",
    price: "50.00",
    size1: "XS",
    size2: "S",
    size3: "M",
    size4: "L",
    color1: "#D3D2D5",
    color2: "#2B2B2B",
    color3: "#0F6450",
    qty: 1,
  },
  {
    id: 2,
    image: apollo,
    brand: "Jupiter",
    name: "Wayfarer",
    price: "75.00",
    size1: "S",
    size2: "M",
    color1: "#1D1F22",
    color2: "#15A4C3",
    color3: "#EA8120",
    qty: 2,
  }
];