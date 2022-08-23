import React from 'react';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

function Friends({ friendsData }) {
  return (
    <ul className={s.friendsList}>
      {friendsData.map(friend => {
        return (
          <li key={friend.id} className={s.item}>
            <span className={friend.isOnline ? s.online : s.offline}></span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Friends;

Friends.prototype = {
  friendsData: PropTypes.array.isRequired,
};
