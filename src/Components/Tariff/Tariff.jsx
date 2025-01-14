import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tariff.module.scss';

const classMap = {
  300: styles.tariff300,
  450: styles.tariff450,
  550: styles.tariff550,
  1000: styles.tariff1000,
};

const Tariff = ({ name, price, speed, traffic, onSelect, selected }) => {
  const classNames = `${styles.tariff} ${classMap[price] || ''} ${selected ? styles.selected : ''}`;

  const handleClick = () => {
    if (onSelect) {
      onSelect(price);
    }
  };

  return (
    <div className={classNames} onClick={handleClick} role="button" tabIndex={0} onKeyDown={handleClick}>
      <h2>{name}</h2>
      <p className={styles.price}>руб {price} /мес</p>
      <p>{speed}</p>
      <p>{traffic}</p>
    </div>
  );
};

Tariff.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  speed: PropTypes.string.isRequired,
  traffic: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};

Tariff.defaultProps = {
  onSelect: null,
  selected: false,
};

export default Tariff;