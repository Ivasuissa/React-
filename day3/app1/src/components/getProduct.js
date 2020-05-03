import React from "react";
import { getProduct } from "./api";

class GetProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: true
    };
  }

  componenteDidMount() {
    getProduct("3").then(response => {
      this.setState({ product: response.data, loading: false });
      console.log(response.data);
    });
  }
  render() {
    const { product, loading } = this.state;
    return (
      <div>
        {loading && <h3>loading...</h3>}
        {!loading && (
          <p>
            <img src={product.avatar} alt={product.name} />
            The Product name is: {product.name} <br />
          </p>
        )}
      </div>
    );
  }
}

export default GetProduct;
