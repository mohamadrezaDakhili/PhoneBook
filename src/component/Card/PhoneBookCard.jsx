import React, { Component } from "react";

export default class PhoneBookCard extends Component {
  render() {
    const { phoneBook, handleDelete } = this.props;

    return (
      <div>
        <div>{phoneBook.name}</div>
        <div>{phoneBook.phone}</div>
        <button onClick={() => handleDelete(phoneBook.id)}>delete</button>
      </div>
    );
  }
}
