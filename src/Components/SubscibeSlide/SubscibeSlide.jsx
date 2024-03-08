import React, { useState } from "react";
import s from "./SubscibeSlide.module.css";
export default function SubscibeSlide() {
  //State for hiding and Showing Contact Form
  const [show, setShow] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);
  };
  return (
    <div className={s.whole}>
      <div className={s.contact}>
        <>
          {show ? (
            <>
              <div className={s.blur}></div>
              <form action="" className={s.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  className={s.input}
                />
                <input
                  type="tel"
                  name="number"
                  id=""
                  className={s.input}
                  placeholder="Enter Your Number"
                />
                <select name="services" id="" className={s.select}>
                  <option value="Select Service">Select Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Website Management">Website Management</option>
                </select>
                <input
                  type="submit"
                  value="Submit"
                  className={s.contactButton}
                />
              </form>
            </>
          ) : null}
        </>
      </div>
      <div className={s.heading}>
        <h3 className={s.h3}>Ready to start?</h3>
      </div>
      <div className={s.container}>
        <div className={s.items}>
          <h5 className={s.h5}>Web Development</h5>
          <h4 className={s.h4}>$99/Project</h4>
          <button className={s.button} onClick={() => setShow(true)}>
            Contact
          </button>
        </div>
        <div className={s.items}>
          <h5 className={s.h5}>Mobile Application Development</h5>
          <h4 className={s.h4}>$119/Project</h4>
          <button className={s.button} onClick={() => setShow(true)}>
            Contact
          </button>
        </div>
        <div className={s.items}>
          <h5 className={s.h5}>UI/UX Design</h5>
          <h4 className={s.h4}>$75/Project</h4>
          <button className={s.button} onClick={() => setShow(true)}>
            Contact
          </button>
        </div>
        <div className={s.itemss}>
          <h5 className={s.h5}>Website Management</h5>
          <h4 className={s.h4}>$50/Site</h4>
          <button className={s.button} onClick={() => setShow(true)}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
