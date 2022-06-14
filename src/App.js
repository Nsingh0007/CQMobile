import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Team from "./Pages/Team/Team";
import Career from "./Pages/Career/Career";
import Home from "./Pages/Home/Home";

import { SVG } from "./assets/icons/icons-png";
import Container from "./Components/CommonContainer/CommonContainer";
import { useEffect } from "react";

function App() {
  const TopContent = {
    heading: "Track and pay bills of all your Debt",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding way. Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding way.",
    cardImg: SVG.MOBILE_PIC,
    classname: "top-content",
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
