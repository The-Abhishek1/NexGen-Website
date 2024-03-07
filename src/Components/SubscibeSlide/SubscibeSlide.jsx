import React from "react";
import s from "./SubscibeSlide.module.css";
export default function SubscibeSlide() {
  return (
    <div className={s.whole}>
      <div className={s.heading}>
        <h3 className={s.h3}>Ready to start?</h3>
      </div>
      <div className={s.container}>
        <div className={s.items}>
          <h5 className={s.h5}>Web Development</h5>
          <h4 className={s.h4}>$99/Project</h4>
          <button className={s.button}>Contact</button>
        </div>
        <div className={s.items}>
          <h5 className={s.h5}>Mobile Application Development</h5>
          <h4 className={s.h4}>$119/Project</h4>
          <button className={s.button}>Contact</button>
        </div>
        <div className={s.items}>
          <h5 className={s.h5}>UI/UX Design</h5>
          <h4 className={s.h4}>$75/Project</h4>
          <button className={s.button}>Contact</button>
        </div>
        <div className={s.items}>
          <h5 className={s.h5}>Website Management</h5>
          <h4 className={s.h4}>$50/Site</h4>
          <button className={s.button}>Contact</button>
        </div>
      </div>
    </div>
  );
}
