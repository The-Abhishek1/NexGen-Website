import React from "react";
import { Instagram, YouTube, WhatsApp } from "@mui/icons-material";
import c from "./ContactUs.module.css";
export default function ContactUs() {
  return (
    <div className={c.whole}>
      <div className={c.container}>
        <div className={c.items}>
          <div className={c.subItems1}>
            <p className={c.ip}>
              <WhatsApp />
              WhatsApp
            </p>
            <p className={c.ip}>
              <YouTube />
              YouTube
            </p>
            <p className={c.ip}>
              <Instagram />
              Instagram
            </p>
          </div>
          <div className={c.subItems}>
            <div className={c.childItem}>
              <h4 className={c.h4}>CONTACT OUR CUSTOMER CARE</h4>
            </div>
            <div className={c.childItem}>
              <input
                type="tel"
                placeholder="Enter Your Number"
                className={c.input}
              />
              <button
                className={c.button}
                onClick={() => alert("Our Staff will contact you soon...!")}
              >
                Submit
              </button>
            </div>
            <div>
              <p className={c.cp}>
                Product updates, news and promotions. No Spam Ever.
              </p>
            </div>
          </div>
        </div>
        <div className={c.item}>
          <h4 className={c.ch4}>Copyright @ 2024 NexGenCoder's</h4>
          <p className={c.p}>Terms</p>
          <p className={c.p}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
