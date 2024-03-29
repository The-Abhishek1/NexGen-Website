import React, { useState } from "react";
import { Instagram, YouTube, WhatsApp, PrivacyTip } from "@mui/icons-material";
import c from "./ContactUs.module.css";
import { db } from "../Firebase/FirebaseConfig";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import Terms from "../Terms/Terms";
import Privacy from "../Privacy/Privacy";

export default function ContactUs() {
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    setSpinnerShow(true);
    try {
      const docRef = await addDoc(collection(db, "CustomerSupport"), {
        Number: data.number,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
      setSpinnerShow(false);
      alert(
        "Your message has been received, Our Staff will contact you soon!!!"
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      {spinnerShow ? (
        <>
          <div className={c.spinner1}></div>
          <div className={c.spinner2}></div>
          <div className={c.spinner3}></div>
          <div className={c.spinner4}></div>
        </>
      ) : null}
      <div className={c.whole}>
        <div className={c.container}>
          <div className={c.items}>
            <div className={c.subItems1}>
              <a href="https://wa.me/qr/7ZOFT4PJA2LNM1" className={c.a}>
                <p className={c.ip}>
                  <WhatsApp />
                  WhatsApp
                </p>
              </a>

              <a href="https://www.youtube.com/@idiot017" className={c.a}>
                <p className={c.ip}>
                  <YouTube />
                  YouTube
                </p>
              </a>
              <a
                href="https://www.instagram.com/abhishekg0wda_02/"
                className={c.a}
              >
                <p className={c.ip}>
                  <Instagram />
                  Instagram
                </p>
              </a>
            </div>
            <div className={c.subItems}>
              <div className={c.childItem}>
                <h4 className={c.h4}>CONTACT OUR CUSTOMER CARE</h4>
              </div>
              <form className={c.childItem} onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className={c.input}
                  {...register("number", {
                    required: "Please enter your number.",
                    maxLength: 10,
                    minLength: 10,
                  })}
                />
                <input type="submit" value="Submit" className={c.button} />
              </form>
              <div>
                <p className={c.cp}>
                  Product updates, news and promotions. No Spam Ever.
                </p>
              </div>
            </div>
          </div>
          <div className={c.item}>
            <h4 className={c.ch4}>Copyright @ 2024 NexGenCoder's</h4>
            <p
              className={c.p}
              onClick={() => {
                setPrivacy(false);
                setTerms(!terms);
              }}
            >
              Terms
            </p>
            <p
              className={c.p}
              onClick={() => {
                setTerms(false);
                setPrivacy(!privacy);
              }}
            >
              Privacy Policy
            </p>
          </div>
        </div>
        {terms ? <Terms /> : null}
        {privacy ? <Privacy /> : null}
      </div>
    </>
  );
}
