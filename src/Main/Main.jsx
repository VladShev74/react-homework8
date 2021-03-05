import styles from "./Main.module.css";

export default function Main({ cardTitle, cardText }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title} id="aboutus">About us</h2>
      <div className={styles.textWrapper}>
        <h4 className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non libero
          earum nam perspiciatis, repellendus sit mollitia tempora voluptas
          quidem, animi voluptatibus nulla harum ipsum! Voluptate?
        </h4>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/business-management-line-2/24/cash-256.png"
            alt="cash icon"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <p className={styles.cardText}>{cardText}</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/business-management-line-2/24/pie_chart-256.png"
            alt="chart icon"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <p className={styles.cardText}>{cardText}</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/line-free/24/Organization_chart-256.png"
            alt="hierarchy icon"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <p className={styles.cardText}>{cardText}</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/business-management-line-2/24/cash-256.png"
            alt="cash icon"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <p className={styles.cardText}>{cardText}</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/business-management-line-2/24/pie_chart-256.png"
            alt="chart icon"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <p className={styles.cardText}>{cardText}</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/line-free/24/Organization_chart-256.png"
            alt="hierarchy icon"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <p className={styles.cardText}>{cardText}</p>
        </div>
      </div>
    </div>
  );
}
