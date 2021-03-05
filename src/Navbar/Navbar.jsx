import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <a href="#">
          <h1 className={styles.logoTitle}>Logo</h1>
        </a>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a className={styles.listItemLink} href="#">
              Home
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.listItemLink} href="#">
              Services
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.listItemLink} href="#aboutus">
              About
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.listItemLink} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
