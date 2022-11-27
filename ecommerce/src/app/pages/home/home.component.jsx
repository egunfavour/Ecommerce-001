import React from "react";
import Main from "../../components/molecules/main/main";
import Navbar from "../../components/molecules/navbar/navbar.components";


const Home = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive = !isActive;
  // };


  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
