import React from 'react'
import styles from './Titles.module.scss'

function Titles() {
    return (
      <hgroup className={styles.titles}>
        <h1 className={styles.title}>
          We are launching <span>soon!</span>
        </h1>
        <p className={styles.subtitle}>Subscribe and get notified</p>
      </hgroup>
    );
}

export default Titles
