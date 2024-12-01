import styles from './Tariff.module.scss';

const classMap = {
  300: styles.tariff300,
  450: styles.tariff450,
  550: `${styles.tariff550} ${styles.tariffLarge}`,
  1000: styles.tariff1000
};

const Tariff = ({ name, price, speed, traffic }) => {
  const classNames = `${styles.tariff} ${classMap[price] || ''}`;
  const highlightClass = price === 550 ? styles.highlight : '';

  return (
    <div className={`${classNames} ${highlightClass}`}>
      <h2>{name}</h2>
      <p className={styles.price}>руб {price} /мес</p> {}
      <p> {speed}</p>
      <p> {traffic}</p>
    </div>
  );
};

export default Tariff;

