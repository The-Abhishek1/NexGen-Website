import { useState } from "react";
import Header from "./Components/Header/Header";
import StarSlide from "./Components/StartSlide/StarSlide";
import ServicesSlide from "./Components/ServicesSlide/ServicesSlide";
import WebDevelopment from "./Components/WebDevelopment/WebDevelopment";
import MobileApplication from "./Components/MobileApplication/MobileApplication";
import UIUX from "./Components/UIUX/UIUX";

import a from "../src/App.module.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={a.container}>
        <Header />
        <StarSlide />
        <ServicesSlide />
        <WebDevelopment />
        <MobileApplication />
        <UIUX />
      </div>
    </>
  );
}

export default App;
