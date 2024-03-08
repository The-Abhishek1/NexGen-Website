import React from "react";
import s from "./ServicesSlide.module.css";
export default function ServicesSlide() {
  return (
    <>
      <div className={s.whole}>
        <h2 className={s.h2}>Our Services</h2>
        <div className={s.container}>
          <div className={s.items}>
            <div className={s.subItems}>
              <h4 className={s.h4}>Web Development</h4>
              <p className={s.p}>
                NexGen Coders delivers sleek, user-friendly websites tailored to
                your brand's needs. With a focus on seamless navigation and
                responsive design, we ensure optimal user experiences across all
                devices. Trust us to bring your digital vision to life with
                expertise and precision.
              </p>
            </div>
          </div>
          <div className={s.items}>
            <div className={s.subItems}>
              <h4 className={s.h4}>Mobile Application Development</h4>
              <p className={s.p}>
                NexGen Coders excels in crafting intuitive and dynamic mobile
                applications that captivate users. Our expertise spans from
                sleek UI/UX design to robust backend development, ensuring
                seamless performance across platforms. Trust us to turn your app
                vision into a reality that stands out in today's competitive
                digital landscape.
              </p>
            </div>
          </div>
          <div className={s.items}>
            <div className={s.subItems}>
              <h4 className={s.h4}>UI and UX Design</h4>
              <p className={s.p}>
                NexGen Coders excels in UI/UX design, creating captivating
                interfaces that prioritize user experience. Our designs are
                meticulously crafted to maximize engagement and usability,
                fostering memorable interactions. Elevate your digital presence
                with our innovative design solutions tailored to your brand's
                identity.
              </p>
            </div>
          </div>
          <div className={s.items}>
            <div className={s.subItems}>
              <h4 className={s.h4}>Website Management</h4>
              <p className={s.p}>
                NexGen Coders provides expert website management, ensuring your
                site stays secure, updated, and optimized for peak performance.
                From content updates to security monitoring, we handle all
                aspects, allowing you to focus on your business goals. Trust us
                to keep your online presence running smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
