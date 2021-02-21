import React from "react";
import "./App.css";
import { styles } from "./common/common-css";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import Pagination from "./common/Pagination"

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <div>
          <AppBar className={classes.appBar} position="static">
            <Typography>Shopping Cart Application</Typography>
            <div className={classes.cartIcon}>
              <Basket />
            </div>
          </AppBar>
          <Container>
            {/* <hr /> */}
            <Grid>
            
            </Grid>
            <div className="row">
              <div className="col-md-12">
                <Filter />
                {/* <hr /> */}
                <Products />
              </div>
              <div className={classes.pagination}>
              <Pagination/>
            </div>
             
            </div>
          </Container>
        </div>
      </Provider>
    );
  }
}
export default withStyles(styles)(App);
