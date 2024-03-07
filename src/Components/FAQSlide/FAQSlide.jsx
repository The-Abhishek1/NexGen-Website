import React, { useState } from "react";
import f from "./FAQSlide.module.css";
import { AddCircleOutline } from "@mui/icons-material";

export default function FAQSlide() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  return (
    <div className={f.container}>
      <h1 className={f.h1}>FAQ</h1>
      <div className={f.items}>
        <div className={f.subItems} onClick={() => setFirst(!first)}>
          <h3 className={f.h3}>How are paid plans billed?</h3>
          {first ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  Paid plans are billed both at a Site and Team level. Both
                  subscriptions are always linked to the email of the purchaser.
                  In order to get extra features and faster loading time to your
                  site, you can acquire any of our site plans. In the moment of
                  purchasing the first site plan within a team, a Team account
                  will be added automatically so editors will be charged at a
                  team level.
                </p>
              </div>
            </>
          ) : null}
        </div>
        <div className={f.subItems} onClick={() => setSecond(!second)}>
          <h3 className={f.h3}>How are paid plans billed?</h3>
          {second ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  Paid plans are billed both at a Site and Team level. Both
                  subscriptions are always linked to the email of the purchaser.
                  In order to get extra features and faster loading time to your
                  site, you can acquire any of our site plans. In the moment of
                  purchasing the first site plan within a team, a Team account
                  will be added automatically so editors will be charged at a
                  team level.
                </p>
              </div>
            </>
          ) : null}
        </div>{" "}
        <div className={f.subItems} onClick={() => setThird(!third)}>
          <h3 className={f.h3}>How are paid plans billed?</h3>
          {third ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  Paid plans are billed both at a Site and Team level. Both
                  subscriptions are always linked to the email of the purchaser.
                  In order to get extra features and faster loading time to your
                  site, you can acquire any of our site plans. In the moment of
                  purchasing the first site plan within a team, a Team account
                  will be added automatically so editors will be charged at a
                  team level.
                </p>
              </div>
            </>
          ) : null}
        </div>{" "}
        <div className={f.subItems} onClick={() => setFourth(!fourth)}>
          <h3 className={f.h3}>How are paid plans billed?</h3>
          {fourth ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  Paid plans are billed both at a Site and Team level. Both
                  subscriptions are always linked to the email of the purchaser.
                  In order to get extra features and faster loading time to your
                  site, you can acquire any of our site plans. In the moment of
                  purchasing the first site plan within a team, a Team account
                  will be added automatically so editors will be charged at a
                  team level.
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
