import React, { Component } from 'react';
import RegBtn from 'components/common/RegBtn';
import s from './Feedback.module.css';
import FeedbackStats from './FeedbackStats/FeedbackStats';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const statisticsBtnName = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return { [statisticsBtnName]: prevState[statisticsBtnName] + 1 };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.feedBackPaper}>
        <h2>Please leave feedback</h2>
        <div className={s.buttonWrapper}>
          <RegBtn
            handleClick={this.addFeedback}
            title="Good"
            name="good"
            type="button"
            className={s.button}
          >
            Good
          </RegBtn>
          <RegBtn
            handleClick={this.addFeedback}
            title="Neutral"
            name="neutral"
            type="button"
            className={s.button}
          >
            Neutral
          </RegBtn>
          <RegBtn
            handleClick={this.addFeedback}
            title="Bad"
            name="bad"
            type="button"
            className={s.button}
          >
            Bad
          </RegBtn>
        </div>
        <h3>Statistics</h3>
        {this.countTotalFeedback() ? (
          <div className={s.feedbackStatsWrapper}>
            <FeedbackStats
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          </div>
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default Feedback;
