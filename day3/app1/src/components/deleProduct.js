import React from "react";
import { deleteProduct } from "./api";

class DeleteProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true
    };
  }

  componentDiMount() {
    deleteProduct("3").then(response => {
      const product = response.data;
      this.setState({ product: product, loading: false });
    });
  }
  render() {
    const { product, loading } = this.state;
    return (
      <div>
        <h1>Show Product </h1>
        {loading && <h3>Loading...</h3>}
        {!loading && (
          <p>
            The product has been created at {product.createdAt}. It is called{" "}
            {product.name}
            <img src={product.avatar} alt={product.name} />
          </p>
        )}
      </div>
    );
  }
}
export default DeleteProduct;
