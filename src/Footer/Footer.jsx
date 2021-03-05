import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title} id="contact">Contact us</h1>
      <h3 className={styles.titleText}>Get in touch with us</h3>
      <div className={styles.contacts}>
        <div className={styles.textWrapper}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse, a quasi facilis velit aut corrupti id nisi officia, magnam iure necessitatibus. Libero laudantium sint ipsa, maiores voluptatibus iste consectetur at molestias expedita tempore deserunt obcaecati dignissimos similique, officiis culpa!
        </p>
        </div>
        <div className={styles.copyright}>
          <p className={styles.info}>
            © Sample Template. All Rights Reserved.
          </p>
          <div className={styles.information}>
            <p className={styles.info}>+38 095 111 11 11</p>
            <p className={styles.info}>sample@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
