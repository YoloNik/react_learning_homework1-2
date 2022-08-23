import React from 'react';
import { Component } from 'react';
//Components:
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/Friends';
import Transactions from './Transactions/Transactions';
//Mock data:
import statisticsData from '../../data/statisticsData';
import profileUserData from '../../data/profileUserData';
import friendsData from '../../data/friendsData';
import transactionsData from '../../data/transactionsData';
//Icon:
import { GrClose } from 'react-icons/gr';
import { BiArrowFromTop } from 'react-icons/bi';
//Style
import s from './Homework01.module.css';

class Homework01 extends Component {
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
      <section>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>Homework-01</h2>
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
            <Profile
              profileUserData={profileUserData}
              stats={profileUserData.stats}
            />
            <Statistics statisticsData={statisticsData} />
            <Friends friendsData={friendsData} />
            <Transactions transactionsData={transactionsData} />
          </div>
        )}
      </section>
    );
  }
}

export default Homework01;
