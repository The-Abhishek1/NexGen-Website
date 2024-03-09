import React, { useState } from "react";
import t from "./Terms.module.css";
import { Close } from "@mui/icons-material";

export default function Terms() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <div className={t.container}>
          <hr />
          <div className={t.whole}>
            <h2 className={t.h2}>NexGen coders Terms & Conditions</h2>
            <p className={t.p}>
              Welcome to NexGen Coders! Please read these Terms and Conditions
              ("Terms") carefully before using our services.
            </p>
            <Close className={t.close} onClick={() => setShow(false)} />
            <div className={t.items}>
              <div className={t.subItems}>
                <h4 className={t.h4}>1. Acceptance of Terms:</h4>
                <p className={t.cp}>
                  By accessing or using our services, you agree to be bound by
                  these Terms. If you do not agree to all the terms and
                  conditions of this agreement, then you may not access the
                  service.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>2. Services:</h4>
                <p className={t.cp}>
                  NexGen Coders offers a range of IT solutions including web
                  development, mobile application development, UI/UX design, and
                  website management. Our services are provided based on the
                  terms outlined in your project agreement.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>3. Payment:</h4>
                <p className={t.cp}>
                  Payment terms are outlined in the project agreement. Payment
                  schedules, methods, and terms are to be adhered to as agreed
                  upon between NexGen Coders and the client.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>4. Intellectual Property:</h4>
                <p className={t.cp}>
                  All intellectual property rights, including copyrights,
                  trademarks, and patents, associated with the services provided
                  by NexGen Coders shall remain the property of NexGen Coders
                  unless otherwise specified in the project agreement.he
                  service.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>5. Confidentiality:</h4>
                <p className={t.cp}>
                  NexGen Coders agrees to keep confidential all information
                  provided by the client unless otherwise agreed upon. Clients
                  also agree to maintain the confidentiality of any proprietary
                  information provided by NexGen Coders.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>6. Limitation of Liability:</h4>
                <p className={t.cp}>
                  NexGen Coders shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  arising out of or related to the use of our services.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>7. Governing Law:</h4>
                <p className={t.cp}>
                  These Terms shall be governed and construed in accordance with
                  the laws of [Jurisdiction], without regard to its conflict of
                  law provisions.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>8. Changes to Terms:</h4>
                <p className={t.cp}>
                  NexGen Coders reserves the right to modify or replace these
                  Terms at any time. Any changes will be effective immediately
                  upon posting on our website. Continued use of our services
                  after any such changes shall constitute your consent to such
                  changes.
                </p>
              </div>
              <div className={t.subItems}>
                <h4 className={t.h4}>Contact Us:</h4>
                <p className={t.cp}>
                  If you have any questions about these Terms, please contact us
                  at "idiot63666@gmail.com" or visit our website for more
                  information.
                </p>
              </div>
            </div>
            <p>Last updated: 11/03/2024</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
