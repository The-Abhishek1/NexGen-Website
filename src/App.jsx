import { useState } from "react";
import Header from "./Components/Header/Header";
import StarSlide from "./Components/StartSlide/StarSlide";
import ServicesSlide from "./Components/ServicesSlide/ServicesSlide";
import a from "../src/App.module.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={a.container}>
        <Header />
        <StarSlide />
        <ServicesSlide />
      </div>
    </>
  );
}

export default App;
