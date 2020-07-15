import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PhoneBookCard from "../Card/PhoneBookCard";
import CreatePhoneBook from "../CreatePhoneBook/CreatePhoneBook";

export default class PhoneBookContainer extends Component {
  state = {
    phoneBook: [],
  };
  handleDelete = (id) => {
    const { phoneBook } = this.state;
    this.setState({ phoneBook: phoneBook.filter((item) => item.id !== id) });
  };
  phoneBookUpdater = (formData) => {
    const { phoneBook } = this.state;
    const lastId = phoneBook.slice(phoneBook.length - 1)[0]?.id;
    formData.id = lastId ? lastId + 1 : 1;
    this.setState({ phoneBook: [...phoneBook, formData] });
  };
  render() {
    return (
      <div>
        {this.state.phoneBook.map((i) => (
          <PhoneBookCard
            key={i.id}
            phoneBook={i}
            handleDelete={this.handleDelete}
          />
        ))}
        <CreatePhoneBook phoneBookUpdater={this.phoneBookUpdater} />
      </div>
    );
  }
}
