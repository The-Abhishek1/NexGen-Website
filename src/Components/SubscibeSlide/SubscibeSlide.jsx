import React, { useState } from "react";
import s from "./SubscibeSlide.module.css";
import { db } from "../Firebase/FirebaseConfig";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { Close } from "@mui/icons-material";

export default function SubscibeSlide() {
  //State for hiding and Showing Contact Form
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "Contact"), {
        Name: data.name,
        Number: data.number,
        Service: data.service,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
      setShow(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Your message has been received, Our Staff will contact you soon!!!");
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className={s.whole}>
      <div className={s.contact}>
        <>
          {show ? (
            <>
              <div className={s.blur}></div>
              <form
                action=""
                className={s.formm}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Close onClick={handleClose} className={s.close} />
                <div className={s.form}>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter Your Name"
                    className={s.input}
                    {...register("name", {
                      required: "Please enter your name.",
                    })}
                    pattern="^[A-Za-z][A-Za-z_]{7,29}$"
                  />
                  <input
                    type="tel"
                    name="number"
                    id=""
                    className={s.input}
                    placeholder="Enter Your Number"
                    {...register("number", {
                      required: "Please enter your number.",
                      maxLength: 10,
                      minLength: 10,
                    })}
                  />
                  <select
                    name="services"
                    id=""
                    className={s.select}
                    {...register("service", { required: true })}
                  >
                    <option value="">Select Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Application">
                      Mobile Application
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Website Management">
                      Website Management
                    </option>
                  </select>
                  <input
                    type="submit"
                    value="Submit"
                    className={s.contactButton}
                  />
                </div>
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
          <h4 className={s.h4}>$500 to $1000/Project</h4>
          <button className={s.button} onClick={() => setShow(!show)}>
            Contact
          </button>
        </div>
        <div className={s.items}>
          <h5 className={s.h5}>Mobile Application Development</h5>
          <h4 className={s.h4}>$1000 to $2000/Project</h4>
          <button className={s.button} onClick={() => setShow(!show)}>
            Contact
          </button>
        </div>
        <div className={s.items}>
          <h5 className={s.h5}>UI/UX Design</h5>
          <h4 className={s.h4}>$300 to $1000/Project</h4>
          <button className={s.button} onClick={() => setShow(!show)}>
            Contact
          </button>
        </div>
        <div className={s.itemss}>
          <h5 className={s.h5}>Website Management</h5>
          <h4 className={s.h4}>$100 to $500/Site</h4>
          <button className={s.button} onClick={() => setShow(!show)}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
