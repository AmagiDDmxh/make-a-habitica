import React from 'react';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <span>Email or Username (case-sensitive)</span>
        <input type="text" />
        <span>Password</span>
        <input type="password" />

        <br />

        <button type="submit">Login</button>
      </div>
    </div>
  );
}
