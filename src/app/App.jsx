import React, { useState } from 'react';
import Tariff from '../Components/Tariff/Tariff';
import styles from './App.module.scss';

const tariffs = [
  { name: 'Безлимитный 300', price: 300, speed: 'до 10 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
  { name: 'Безлимитный 450', price: 450, speed: 'до 50 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
  { name: 'Безлимитный 550', price: 550, speed: 'до 100 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
  { name: 'Безлимитный 1000', price: 1000, speed: 'до 200 Мбит/сек', traffic: 'Объем включенного трафика не ограничен' },
];

const App = () => {
  const [selectedRate, setSelectedRate] = useState(null);

  const handleSelect = (rate) => {
    setSelectedRate(rate);
  };

  return (
    <div className={styles.app}>
      <div className={styles.tariffs}>
        {tariffs.map((tariff) => (
          <Tariff
            key={tariff.price}
            name={tariff.name}
            price={tariff.price}
            speed={tariff.speed}
            traffic={tariff.traffic}
            onSelect={handleSelect}
            selected={selectedRate === tariff.price}
          />
        ))}
      </div>
    </div>
  );
};

export default App;