import React, { Component } from "react";

export default class CreatePhoneBook extends Component {
  state = {
    phone: "",
    name: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //   const test = Object.keys(e.target).reduce((a, i) => {
    //     if (e.target[i].name === "" || e.target[i].name === undefined) {
    //       return a;
    //     } else {
    //       a[e.target[i].name] = e.target[i].value;
    //       return a;
    //     }
    //   }, {});

    const { phoneBookUpdater } = this.props;
    phoneBookUpdater({ ...this.state });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if ([event.target.name] == "phone") {
      this.setState({
        [event.target.name]: event.target.value.replace(/[^0-9\.]+/g, ""),
      });
    }
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            value={this.state.phone}
            name="phone"
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
