import React from 'react';
import s from './ContactList.module.css';
import { AiOutlineUserDelete } from 'react-icons/ai';
import RegBtn from 'components/common/RegBtn';
import PropTypes from 'prop-types';

function ContactList({ filter, contacts, filterByName, deleteContact }) {
  //console.log(deleteContact);
  //const markup =

  return (
    <ul className={s.contactList}>
      {(filter &&
        filterByName().map(el => {
          return (
            <li className={s.contactItem} key={el.id}>
              <p>
                {el.name}: {el.number}
              </p>
              <RegBtn
                name={el.id}
                handleClick={deleteContact}
                className={s.button}
                type="button"
              >
                <AiOutlineUserDelete /> <span>Delete</span>
              </RegBtn>
            </li>
          );
        })) ||
        contacts.map(el => {
          return (
            <li className={s.contactItem} key={el.id}>
              <p>
                {el.name}: {el.number}
              </p>
              <RegBtn
                name={el.id}
                handleClick={deleteContact}
                className={s.button}
                type="button"
              >
                <AiOutlineUserDelete /> Delete
              </RegBtn>
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;

ContactList.prototype = {
  filter: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  filterByName: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
