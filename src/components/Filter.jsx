import React, { Component } from "react";
import { connect } from "react-redux";
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
import { filterProducts, sortProducts } from "../actions/productActions";
import { CustomSelect } from "../common/toolsBar";
import { orderBy, size } from "../common/constant";
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-4">
          <CustomSelect
            label={"Order by"}
            value={this.props.sort}
            options={orderBy}
            handleChange={(event) => {
              this.props.sortProducts(
                this.props.filteredProducts,
                event.target.value
              );
            }}
          />
          {/* <label>
            
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label> */}
        </div>
        <div className="col-md-4">
          <CustomSelect
            label={"Filter Size"}
            value={this.props.size}
            options={size}
            handleChange={(event) => {
              this.props.filterProducts(
                this.props.products,
                event.target.value
              );
            }}
          />
         
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);
