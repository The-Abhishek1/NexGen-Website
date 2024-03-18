import React, { useState } from "react";
import i from "./Internships.module.css";
import { db } from "../Firebase/FirebaseConfig";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import {
  Close,
  LocationCity,
  CalendarMonth,
  RestartAlt,
} from "@mui/icons-material";

export default function Internships() {
  //State for hiding and Showing Contact Form
  const [show, setShow] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    setShow(false);
    setSpinnerShow(true);
    try {
      const docRef = await addDoc(collection(db, "Internships"), {
        Name: data.name,
        Number: data.number,
        Internship: data.internship,
      });
      console.log("Document written with ID: ", docRef.id);
      setSpinnerShow(false);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Your message has been received, Our Staff will contact you soon!!!");
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {spinnerShow ? (
        <>
          <div className={i.spinner1}></div>
          <div className={i.spinner2}></div>
          <div className={i.spinner3}></div>
          <div className={i.spinner4}></div>
        </>
      ) : null}
      <div className={i.whole}>
        <div className={i.contact}>
          <>
            {show ? (
              <>
                <div className={i.blur}></div>
                <form
                  action=""
                  className={i.formm}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Close onClick={handleClose} className={i.close} />
                  <div className={i.form}>
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter Your Name"
                      className={i.input}
                      {...register("name", {
                        required: "Please enter your name.",
                      })}
                      pattern="^[A-Za-z][A-Za-z_]{7,29}$"
                    />
                    <input
                      type="tel"
                      name="number"
                      id=""
                      className={i.input}
                      placeholder="Enter Your Number"
                      {...register("number", {
                        required: "Please enter your number.",
                        maxLength: 10,
                        minLength: 10,
                      })}
                    />{" "}
                    <select
                      name="services"
                      id=""
                      className={i.select}
                      {...register("internship", { required: true })}
                    >
                      <option value="">Select Internship</option>
                      <option value="Frontend Development">
                        Frontend Development
                      </option>
                      <option value="Backend Development">
                        Backend Development
                      </option>
                      <option value="App Development">App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </select>
                    <input
                      type="submit"
                      value="Submit"
                      className={i.contactButton}
                    />
                  </div>
                </form>
              </>
            ) : null}
          </>
        </div>
        <h3 className={i.h3}>InternShips</h3>
        <div className={i.container}>
          <div className={i.items}>
            <h5 className={i.h5}>Frontend Development</h5>
            <div>
              <p className={i.p}>
                <LocationCity />
                Banglore
              </p>
              <p className={i.p}>
                <RestartAlt />
                Starts immediately
              </p>
              <p className={i.p}>
                <CalendarMonth />
                15 days
              </p>
            </div>
            <button className={i.button} onClick={() => setShow(!show)}>
              Apply Now
            </button>
          </div>
          <div className={i.items}>
            <h5 className={i.h5}>Backend Development</h5>
            <div>
              <p className={i.p}>
                <LocationCity />
                Banglore
              </p>
              <p className={i.p}>
                <RestartAlt />
                Starts immediately
              </p>
              <p className={i.p}>
                <CalendarMonth />
                15 days
              </p>
            </div>
            <button className={i.button} onClick={() => setShow(!show)}>
              Apply Now
            </button>
          </div>
          <div className={i.items}>
            <h5 className={i.h5}>App Development</h5>
            <div>
              <p className={i.p}>
                <LocationCity />
                Banglore
              </p>
              <p className={i.p}>
                <RestartAlt />
                Starts immediately
              </p>
              <p className={i.p}>
                <CalendarMonth />
                15 days
              </p>
            </div>
            <button className={i.button} onClick={() => setShow(!show)}>
              Apply Now
            </button>
          </div>
          <div className={i.items}>
            <h5 className={i.h5}>UI/UX Design</h5>
            <div>
              <p className={i.p}>
                <LocationCity />
                Banglore
              </p>
              <p className={i.p}>
                <RestartAlt />
                Starts immediately
              </p>
              <p className={i.p}>
                <CalendarMonth />
                15 days
              </p>
            </div>
            <button className={i.button} onClick={() => setShow(!show)}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
