import React from 'react';
import Stats from './Stats/Stats';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ profileUserData, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={profileUserData.avatar}
          alt={profileUserData.imgAlt}
          className={s.avatar}
        />
        <p className={s.name}>{profileUserData.username}</p>
        <p className={s.tag}>@{profileUserData.tag}</p>
        <p className={s.location}>{profileUserData.location}</p>
      </div>
      <ul className={s.stats}>
        <Stats stats={stats} />
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  profileUserData: PropTypes.object.isRequired,
  stats: PropTypes.array.isRequired,
};
