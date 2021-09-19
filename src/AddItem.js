import React, { Component } from "react";
import "./styles.css";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Product</h3>
        <input
          placeholder="Name"
          ref={(nameInput) => (this.nameInput = nameInput)}
        />
        <input
          placeholder="Price"
          ref={(priceInput) => (this.priceInput = priceInput)}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddItem;
