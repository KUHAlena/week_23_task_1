import Tariff from '../Components/Tariff/Tariff';
import styles from './App.module.scss';

const App = () => {
  const tariffs = [
    { name: 'Безлимитный 300', price: 300, speed: 'до 10 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
    { name: 'Безлимитный 450', price: 450, speed: 'до 50 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
    { name: 'Безлимитный 550', price: 550, speed: 'до 100 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
    { name: 'Безлимитный 1000', price: 1000, speed: 'до 200 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
  ];

  return (
    <div className={styles.App}>
      <h1>Тарифы</h1>
      <div className={styles.tariffs}>
        {tariffs.map((tariff, index) => (
          <Tariff key={index} {...tariff} />
        ))}
      </div>
    </div>
  );
};

export default App;
