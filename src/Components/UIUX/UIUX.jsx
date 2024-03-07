import React from "react";
import u from "./UIUX.module.css";
export default function UIUX() {
  return (
    <>
      <div className={u.whole}>
        <div className={u.container}>
          <div className={u.first}>
            <p className={u.p}>
              NexGen Coders specializes in UX/UI design, crafting visually
              stunning and intuitive interfaces that elevate user experiences.
              Our designs seamlessly blend creativity with functionality to
              engage and delight your audience. Trust us to transform your
              digital vision into captivating and user-centric designs that
              drive success.
            </p>
          </div>
          <div></div>
          <div className={u.second}>
            <h3 className={u.h3}>UI/UI Design</h3>
          </div>
        </div>
      </div>
    </>
  );
}
