import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ statisticsData }) {
  return (
    <div className={s.statisticsWrapper}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statisticsList}>
        {statisticsData.map((el, index) => {
          let test = `#${(Math.random().toString(16) + '000000')
            .substring(2, 8)
            .toUpperCase()}`;
          return (
            <li
              key={index}
              className={s.item}
              style={{ backgroundColor: test }}
            >
              <span className={s.label}>{el.label} </span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  statisticsData: PropTypes.array.isRequired,
};
