import Image from "next/image";
import React from "react";
import styles from "./DashboardImage.module.scss";

function DashboardImage() {
  return (
    <Image
      className={styles.dashboardImage}
      src="/images/illustration-dashboard.png"
      alt="image of dashboard"
      width={640}
      height={383}
    />
  );
}

export default DashboardImage;
