import React, { Component } from 'react';
import CalendarDay from './CalendarDay';

class CalendarMonth extends Component {
  constructor(props) {
    super(props)

    this.state = {
     now: new Date()
    }
  }

  //constructor 역할 인자값을 받음.

  render() {
    return (
      <div className="Calendar">
      <CalendarDay>
        adfasdfadfdaasdfsdfadsf
      </CalendarDay>
      </div>
    );
  }}

  export default CalendarMonth;

  //캘린더 데이를 뿌려줌.
  // new CalendarMoth(eiwur)   -> counstructor(eiwur);