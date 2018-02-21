import React, { Component } from "react";
import ReactDOM from "react-dom";
import Month from "./Month";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear()
    }
    document.addEventListener('keydown', (ev) => this.handleKeyPress(ev));
  }

  nextMonth() {
    let month = this.state.currentMonth + 1;
    let year = this.state.currentYear;
    if(month >= 12) {
      month = 0;
      year += 1;
    }
    this.setState({
      currentMonth: month,
      currentYear: year
    });
  }

  previousMonth() {
    let month = this.state.currentMonth - 1;
    let year = this.state.currentYear;
    if (month < 0) {
      month = 11;
      year -= 1;
    }
    this.setState({
      currentMonth: month,
      currentYear: year
    });
  }

  handleKeyPress(ev) {
    if (ev.keyCode == 37) {
      this.previousMonth();
    }

    if (ev.keyCode == 39) {
      this.nextMonth();
    }
  }

  render() {
    return (
      <section className="calendar">
        <button className="calendar__button calendar__button_previous " onClick={() => this.previousMonth()}>
          <img className="calendar__button calendar__button_arrow" src='left-arrow.svg'/>
        </button>
        <Month month={this.state.currentMonth} year={this.state.currentYear} />
        <button className="calendar__button calendar__button_next" onClick={() => this.nextMonth()}>
          <img className="calendar__button calendar__button_arrow" src='right-arrow.svg'/>
        </button>
      </section>
    );
  }
}

const wrapper = document.getElementById("calendar-container");
wrapper ? ReactDOM.render(<Calendar />, wrapper) : false;

export default Calendar;
