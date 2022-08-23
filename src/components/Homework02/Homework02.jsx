import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Phonebook from './Phonebook/Phonebook';

import { GrClose } from 'react-icons/gr';
import { BiArrowFromTop } from 'react-icons/bi';
import s from './Homework02.module.css';

export class Homework02 extends Component {
  state = {
    isHomeworkOpen: false,
  };

  ToggleHomeworkItem = () => {
    this.setState(prevState => ({
      isHomeworkOpen: !prevState.isHomeworkOpen,
    }));
  };

  render() {
    const { isHomeworkOpen } = this.state;
    return (
      <section className={s.section}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>Homework-02</h2>
          <button
            onClick={this.ToggleHomeworkItem}
            type="button"
            className={s.closeBtn}
          >
            {isHomeworkOpen ? (
              <GrClose style={{ width: 20, height: 20 }} />
            ) : (
              <BiArrowFromTop style={{ width: 20, height: 20 }} />
            )}
          </button>
        </div>

        {isHomeworkOpen && (
          <div className={s.contentWrapper}>
            <Feedback />
            <Phonebook />
          </div>
        )}
      </section>
    );
  }
}

export default Homework02;
