import React from 'react';
import PropTypes from 'prop-types';

function RegBtn({ handleClick, type, name, className, children }) {
  return (
    <button name={name} onClick={handleClick} className={className} type={type}>
      {children}
    </button>
  );
}

export default RegBtn;

RegBtn.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.object,
};
