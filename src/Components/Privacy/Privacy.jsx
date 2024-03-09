import React, { useState } from "react";
import p from "./Privacy.module.css";
import { Close } from "@mui/icons-material";

export default function Privacy() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <div className={p.container}>
          <hr />
          <div className={p.whole}>
            <h2 className={p.h2}>NexGen Coders Privacy Policy</h2>
            <p className={p.p}>
              NexGen Coders ("us", "we", or "our") operates the website and is
              committed to protecting your privacy. This Privacy Policy outlines
              how we collect, use, and disclose personal information when you
              use our services.
            </p>
            <Close className={p.close} onClick={() => setShow(false)} />
            <div className={p.items}>
              <div className={p.subItems}>
                <h4 className={p.h4}>1. Information Collection and Use:</h4>
                <p className={p.cp}>
                  We may collect personal information such as your name, email
                  address, phone number, and other relevant details when you
                  contact us or use our services. This information is used to
                  provide and improve our services, communicate with you, and
                  fulfill your requests.
                </p>
              </div>
              <div className={p.subItems}>
                <h4 className={p.h4}>2. Log Data:</h4>
                <p className={p.cp}>
                  We may also collect information that your browser sends
                  whenever you visit our website ("Log Data"). This Log Data may
                  include information such as your computer's Internet Protocol
                  ("IP") address, browser type, browser version, the pages of
                  our website that you visit, the time and date of your visit,
                  and other statistics.
                </p>
              </div>
              <div className={p.subItems}>
                <h4 className={p.h4}>3. Cookies:</h4>
                <p className={p.cp}>
                  We use cookies and similar tracking technologies to track the
                  activity on our website and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept
                  cookies, you may not be able to use some portions of our
                  website.
                </p>
              </div>
              <div className={p.subItems}>
                <h4 className={p.h4}>4. Data Security:</h4>
                <p className={p.cp}>
                  We implement appropriate security measures to protect the
                  security of your personal information both online and offline.
                  However, no method of transmission over the Internet, or
                  method of electronic storage, is 100% secure. Therefore, we
                  cannot guarantee its absolute security.
                </p>
              </div>
              <div className={p.subItems}>
                <h4 className={p.h4}>5. Third-Party Services:</h4>
                <p className={p.cp}>
                  Our website may contain links to third-party websites or
                  services that are not operated by us. We have no control over,
                  and assume no responsibility for the content, privacy
                  policies, or practices of any third-party websites or
                  services.
                </p>
              </div>
              <div className={p.subItems}>
                <h4 className={p.h4}>6. Changes to This Privacy Policy:</h4>
                <p className={p.cp}>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page. You are advised to review this Privacy Policy
                  periodically for any changes.
                </p>
              </div>
              <div className={p.subItems}>
                <h4 className={p.h4}>Contact Us:</h4>
                <p className={p.cp}>
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
