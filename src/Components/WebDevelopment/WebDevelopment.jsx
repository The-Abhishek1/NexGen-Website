import React from "react";
import w from "./WebDevelopment.module.css";
export default function WebDevelopment() {
  return (
    <>
      <div className={w.whole}>
        <div className={w.container}>
          <div className={w.first}>
            <p className={w.p}>
              NexGen Coders specializes in crafting bespoke web solutions
              tailored to your unique business needs. From intuitive user
              interfaces to robust backend systems, we create dynamic websites
              that captivate and engage your audience. With a keen eye for
              design and functionality, we ensure your online presence stands
              out in the digital landscape.
            </p>
          </div>
          <div></div>
          <div className={w.second}></div>
        </div>
      </div>
    </>
  );
}
