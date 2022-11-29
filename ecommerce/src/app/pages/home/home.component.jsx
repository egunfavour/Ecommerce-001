import React from "react";
import Navbar from "../../components/molecules/navbar/navbar.components";
import Main from "../../components/molecules/main/main.component.jsx";
import { CategoryHead } from "./home.styles";

const Home = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive = !isActive;
  // };

  return (
    <div>
      <Navbar />
      <CategoryHead
        fontSize="42px"
        textColor="#000"
        fontWeight="400"
        name="Category name"
      />
      <Main />
    </div>
  );
};

export default Home;
