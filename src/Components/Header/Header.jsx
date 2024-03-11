import React, { useState } from "react";
import Logo from "../Images/NexgenWhite.png";
import h from "./Header.module.css";
import { db } from "../Firebase/FirebaseConfig";
import { useForm } from "react-hook-form";
import { Close } from "@mui/icons-material";
import { collection, addDoc } from "firebase/firestore";
export default function Header() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "Join"), {
        Name: data.name,
        Email: data.email,
        Phone: data.number,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
      setShow(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Your message has been received, Our Staff will contact you soon!!!");
  };
  return (
    <>
      <div className={h.header}>
        <div className={h.first}>
          {show ? (
            <div className={h.contact}>
              <div className={h.blur}></div>
              <Close className={h.close} onClick={() => setShow(false)} />
              <form
                action=""
                className={h.formm}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={h.form}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className={h.input}
                    {...register("name", {
                      required: "Please enter your name.",
                    })}
                    pattern="^[A-Za-z][A-Za-z_]{7,29}$"
                  />
                  <input
                    type="tel"
                    name="number"
                    placeholder="Enter Your Number"
                    className={h.input}
                    {...register("number", {
                      required: "Please enter your number.",
                      maxLength: 10,
                      minLength: 10,
                    })}
                  />
                  <input
                    type="email"
                    name="email"
                    className={h.input}
                    placeholder="Enter Your Email"
                    {...register("email", {
                      required: "Please enter your email.",
                    })}
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className={h.contactButton}
                  />
                </div>
              </form>
            </div>
          ) : null}
          <div className={h.second}>
            <div>
              <img src={Logo} alt="" height={45} className={h.img} width={70} />
            </div>
            <div></div>
            <div></div>
            <div>
              <button className={h.button} onClick={() => setShow(!show)}>
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
