import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Logo from "../Images/robot.jpg";
import h from "./Header.module.css";

export default function Header() {
  //State for lightmode and darkmode toggle

  const [darkMode, setDarkMode] = useState(false);

  const DarkMode = () => {
    setDarkMode(true);
  };
  const LightMode = () => {
    setDarkMode(false);
  };
  return (
    <>
      <div className={h.header}>
        <div className={h.second}>
          <div>
            <img src={Logo} alt="" height={45} className={h.img} />
          </div>
          <div>
            {darkMode ? (
              <DarkModeIcon sx={{ fontSize: 27 }} onClick={LightMode} />
            ) : (
              <LightModeIcon sx={{ fontSize: 27 }} onClick={DarkMode} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
