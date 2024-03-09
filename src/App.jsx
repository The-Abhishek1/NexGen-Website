import { useState } from "react";
import Header from "./Components/Header/Header";
import StarSlide from "./Components/StartSlide/StarSlide";
import ServicesSlide from "./Components/ServicesSlide/ServicesSlide";
import WebDevelopment from "./Components/WebDevelopment/WebDevelopment";
import MobileApplication from "./Components/MobileApplication/MobileApplication";
import SubscibeSlide from "./Components/SubscibeSlide/SubscibeSlide";
import FAQSlide from "./Components/FAQSlide/FAQSlide";
import UIUX from "./Components/UIUX/UIUX";
import ContactUs from "./Components/ContactUs/ContactUs";
import a from "../src/App.module.css";

function App() {
  return (
    <>
      <div className={a.container}>
        <Header />
        <StarSlide />
        <ServicesSlide />
        <WebDevelopment />
        <MobileApplication />
        <UIUX />
        <SubscibeSlide />
        <FAQSlide />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
