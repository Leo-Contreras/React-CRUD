import React, { Component } from "react";
import "./styles.css";
import ProductItem from "./product-item";
import AddItem from "./AddItem";

const products = [
  {
    name: "Item 1",
    price: 200
  },
  {
    name: "Item 2",
    price: 300
  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter((product) => {
      return product.name !== name;
    });

    console.log(filteredProducts);
    this.setState({ products: filteredProducts });
  }

  onAdd(name, price) {
    const products = this.getProducts();
    products.push({
      name,
      price
    });

    this.setState({ products });
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map((product) => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1> Lista de Materiales </h1>

        <AddItem onAdd={this.onAdd} />
        <div>
          <hr />
        </div>
        {this.state.products.map((product) => {
          return (
            <ProductItem
              key={product.name}
              {...product}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
