import React, { useState } from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";



function Home() {
  const [currentInfo, setCurrentInfo] = useState("Home");
  const renderInfo = () => {
    if (currentInfo === "About") {
      return <About />;
    }

    if (currentInfo === "Portfolio") {
      return <Portfolio />;
    
  }
    return <Contact />; 
}


const handlePageChange = (page) => setCurrentInfo(page);
return (
    <div>
        <Header currentInfo={currentInfo} handlePageChange={handlePageChange} />
        {renderInfo()}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer />
  </div>
);
}
export default Home;
