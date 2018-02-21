import React, { Component } from "react";
import ReactDOM from "react-dom";

class Day extends Component {
  constructor(props) {
    super(props);
  }
  getClasses() {
    let classes = ['month__day'];
    let today = new Date();
    if (this.props.day === '') {
      classes.push('month__day_empty');
    }
    if (this.props.isWeekDay) {
      classes.push('month__day_weekday');
    }

    if (today.getFullYear() == this.props.year && today.getMonth() == this.props.month
        && today.getDate() == this.props.day) {
      classes.push('month__day_today');
    }
    return classes.join(' ');
  }
  render() {
    return (
    <div className={this.getClasses()}>{this.props.day}</div>
    );
  }
}

export default Day;
