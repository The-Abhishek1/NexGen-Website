import React from "react";
import s from "../StartSlide/StartSlide.module.css";
export default function StarSlide() {
  return (
    <>
      <div className={s.whole}>
        <div className={s.second}>
          <h3 className={s.h3}>NexGen Coder's</h3>
          <p className={s.p}>
            Empowering businesses through innovative digital solutions for a
            brighter, connected future.
          </p>
        </div>
        <div></div>
        <div className={s.third}>
          <p>
            NexGen Coders is a cutting-edge IT startup dedicated to transforming
            digital landscapes with our comprehensive suite of services.
            Specializing in web development, UI/UX design, website maintenance,
            and mobile application development, we blend innovation with
            expertise to craft seamless digital experiences. With a focus on
            next-generation technologies and client-centric solutions, we propel
            businesses forward, empowering them to thrive in today's dynamic
            market
          </p>
        </div>
      </div>
    </>
  );
}
