import React from 'react';
import PropTypes from 'prop-types';
import s from './Stats.module.css';

function Stats(stats) {
  return stats.stats.map((el, index) => {
    return (
      <li key={index} className={s.statsItem}>
        <span className={s.label}>{Object.keys(el)} </span>
        <span className={s.quantity}>{Object.values(el)}</span>
      </li>
    );
  });
}

export default Stats;

Stats.propTypes = {
  stats: PropTypes.array.isRequired,
};
