import React from "react";
import DashboardImage from "../components/dashboard-image";
import Footer from "../components/footer";
import NextHead from "../components/head";
import Header from "../components/header";
import Signup from "../components/signup";
import Titles from "../components/titles";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextHead />

      <Header />

      <main className={styles.main}>
        <Titles />

        <Signup />

        <DashboardImage />
      </main>

      <Footer />
    </div>
  );
}
