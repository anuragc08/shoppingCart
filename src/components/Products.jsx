import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Container,
  Grid,
  TextField,
  Button,
  Badge,
  Paper,
  makeStyles,
} from "@material-ui/core";
import Card from "../common/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { cartItems } = this.props;
    const productItems = this.props.products.map((product) => (
      <Grid item xs={3}>
        <Paper>
          <Card
            productImage={`products/${product.sku}_2.jpg`}
            productTitle={product.title}
            productPrice={util.formatCurrency(product.price)}
            addToCart={this.props.addToCart}
            productDescription
            productIcon
            subheader
            smallDetailProduct
            cartItems={cartItems}
            product={product}
          />
        </Paper>
      </Grid>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
