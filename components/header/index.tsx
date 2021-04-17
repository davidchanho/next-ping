import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <img src="/images/logo.svg" alt="ping logo" width={86} height={26} />
    </header>
  );
}

export default Header;
