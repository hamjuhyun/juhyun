import React, { Component } from 'react';
import CalendarDay from './CalendarDay';

class CalendarMonth extends Component {
  constructor(props) {
    super(props)

    this.state = {
     now: new Date()
    }
  }

  render() {
    return (
      <div className="calendarMonth">
      <CalendarDay>
        나는 달력입니다. CalendarMonth파일입니다.
      </CalendarDay>
      </div>
    );
  }}

  export default CalendarMonth;