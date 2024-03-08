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
          <h3 className={f.h3}>
            What types of websites can NexGen Coders help me build?
          </h3>
          {first ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  NexGen Coders can assist in building various types of
                  websites, including business websites, e-commerce platforms,
                  blogs, portfolios, and more. Just let us know your
                  requirements, and we'll tailor a solution to suit your needs.
                </p>
              </div>
            </>
          ) : null}
        </div>
        <div className={f.subItems} onClick={() => setSecond(!second)}>
          <h3 className={f.h3}>
            {" "}
            How often will my website be updated and maintained?
          </h3>
          {second ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  We offer flexible maintenance plans based on your specific
                  needs. Whether you require weekly, monthly, or on-demand
                  updates, our team ensures your website remains current with
                  the latest content, security patches, and performance
                  optimizations.
                </p>
              </div>
            </>
          ) : null}
        </div>{" "}
        <div className={f.subItems} onClick={() => setThird(!third)}>
          <h3 className={f.h3}>
            Can NexGen Coders develop mobile apps for both iOS and Android
            platforms?
          </h3>
          {third ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  Absolutely! Our expertise extends to both iOS and Android app
                  development. Whether you need an app for one platform or
                  cross-platform compatibility, we have the skills and
                  experience to bring your mobile app vision to life.
                </p>
              </div>
            </>
          ) : null}
        </div>{" "}
        <div className={f.subItems} onClick={() => setFourth(!fourth)}>
          <h3 className={f.h3}>
            How long does it take to develop a mobile app with NexGen Coders?
          </h3>
          {fourth ? (
            <>
              <div className={f.content}>
                <p className={f.p}>
                  The timeline for app development varies depending on the
                  complexity of your project and specific requirements. However,
                  we strive to deliver high-quality mobile apps within a
                  reasonable timeframe, ensuring timely delivery without
                  compromising on quality.
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
