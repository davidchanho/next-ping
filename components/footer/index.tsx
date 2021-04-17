import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <span>
          <FaFacebookF width={7.03} height={14.73} />
        </span>
        <span>
          <AiOutlineTwitter width={7.03} height={14.73} />
        </span>
        <span>
          <AiOutlineInstagram width={7.03} height={14.73} />
        </span>
      </div>
      <p className={styles.copyright}>© Copyright Ping. All rights reserved.</p>
      <p className={styles.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.davidchanho.com/">David Chan Ho</a>.
      </p>
    </footer>
  );
}

export default Footer;
