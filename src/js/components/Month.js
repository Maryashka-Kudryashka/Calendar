import React, { Component } from "react";
import ReactDOM from "react-dom";
import Day from "./Day";

class Month extends Component {
  constructor(props) {
    super(props);
    this.monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  }

  getDaysArray() {
    let days = new Date(this.props.year, this.props.month + 1, 0).getDate();
    let firstDay = new Date(this.props.year, this.props.month).getDay() - 1;
    if (firstDay == -1) {
      firstDay = 6;
    }
    let lastDay = new Date(this.props.year, this.props.month + 1, 0).getDay() - 1;
    if (lastDay == -1) {
      lastDay = 6;
    }
    let daysArray = new Array(days).fill('').map((el, i) => el + (i + 1));
    daysArray = new Array(firstDay).fill('').concat(daysArray);
    daysArray = daysArray.concat(new Array(6 - lastDay).fill(''));

    return daysArray;
  }
  render() {
    return (
      <section className="month">
        <h2 className="month__name"> {this.monthes[this.props.month]}</h2>
        <h3 className="month__year"> {this.props.year} </h3>
        <div className="month__days">
          {this.days.map((el, i) => <Day day={el} key={i} isWeekDay={true} />)}
          {this.getDaysArray().map((el, i) => <Day day={el} month={this.props.month} year={this.props.year} key={i} />)}
        </div>
      </section>
    );
  }
}

export default Month;
