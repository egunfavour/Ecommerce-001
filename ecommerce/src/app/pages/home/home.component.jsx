
import React from "react";
import Navbar from "../../components/molecules/navbar/navbar.components";
import Main from "../../components/molecules/main/main";
import CategoryHeading from "../../components/molecules/category-head/category-head.component";

const Home = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive = !isActive;
  // };


  return (
    <div>
      <Navbar />
      <CategoryHeading />
            <Main />
    </div>
  );
};

export default Home;
