import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/cartActions";
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
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function CustomizedBadges(numberOfItem, clickHandler) {
  console.log(clickHandler);
  return (
    <IconButton aria-label="cart" color="primary" onClick={clickHandler}>
      <StyledBadge badgeContent={numberOfItem} color="primary">
        <ShoppingCartIcon />
        <Typography>CART</Typography>
      </StyledBadge>
    </IconButton>
  );
}

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }
  clickHandler = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  render() {
    const { cartItems } = this.props;

    return (
      <div className="">
        {CustomizedBadges(cartItems.length, this.clickHandler)}
        {/* {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <i className="fa fa-2x fa-shopping-cart"></i>
            <hr />
          </div>
        )} */}
        {this.state.isClicked && (
          <div>
            <ul style={{ marginLeft: -25, zIndex: 100,color:"black" }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <Button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </Button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>

            <b>
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <Button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn btn-primary ml-5"
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
