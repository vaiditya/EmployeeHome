import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import selectCategory, {
  selectRange,
  updateUserActivity
} from "./SelectCategoryAction";
import { removeItemFlagAction } from "./WishListAction";
import FlatData from "./FlatData";
import PgData from "./PgData";
import UserActivityReducer from "./UserActivityReducer";

import { Header } from "./Layouts";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Select,
  MenuItem,
  Typography,
  Slider,
  OutlinedInput
} from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.show = false;
    this.showRange = false;
  }

  handleCategoryChange(event) {
    this.props.selectedCategory(event.target.value);
    this.showRange = true;
  }
  handleRangeChange(event, value) {
    this.props.selectedRange(value);
  }
  handleClick() {
    this.show = !this.show;
    this.forceUpdate();
    this.props.removeItemFlag();
  }

  render() {
    let category;
    let range;
    let displayWishList;

    category = this.props.selectedCategoryProp
      ? this.props.selectedCategoryProp
      : this.props.userData[0].category;
    range = this.props.selectedRangeProp
      ? this.props.selectedRangeProp
      : this.props.userData[0].price;
    displayWishList = this.props.wishListProp
      ? this.props.wishListProp.fragment
      : this.props.userData[0].wishList;
    //const o=(displayWishList.length>0?displayWishList.refs.bname.name:'sadsada');

    /* if(this.props.selectedCategoryProp && this.props.selectedRangeProp)
    this.props.userDataStatus(this.props.selectedCategoryProp,this.props.selectedRangeProp);
    */

    return (
      <div className="main">
        <Header
          props={this.props}
          handleClick={this.handleClick}
          badgeCount={
            this.props.wishListProp
              ? this.props.wishListProp.fragment.length
              : 0
          }
        />
        <div className="main-body">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <Grid container justify="center" alignItems="center">
                    <Grid item xs={6}>
                      Residence Type:
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        value={category}
                        onChange={this.handleCategoryChange}
                        input={
                          <OutlinedInput
                            name="age"
                            id="outlined-age-native-simple"
                          />
                        }
                        
                      >
                        <MenuItem value={"Flat"}>Flat</MenuItem>
                        <MenuItem value={"PG"}>PG</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>

              <Grid items xs={12}>
                {this.showRange ? (
                  <div className="slider">
                    <Grid container spacing={2} justify="center">
                      <Grid item xs={1}>
                        0
                      </Grid>
                      <Grid item xs={9}>
                        <Slider
                          defaultValue={5000}
                          min={0}
                          max={10000}
                          aria-labelledby="discrete-slider-always"
                          step={100}
                          valueLabelDisplay="on"
                          onChange={this.handleRangeChange}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        10000
                      </Grid>
                    </Grid>
                  </div>
                ) : null}
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <div className="container">
                {category === "Flat" ? <FlatData /> : <PgData />}

                {this.show ? displayWishList : null}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    selectedCategoryProp: state.selectedCategory,
    selectedRangeProp: state.selectedRange,
    wishListProp: state.wishList
  };
}

function matchDispatchTOProps(dispatch) {
  return bindActionCreators(
    {
      selectedCategory: selectCategory,
      selectedRange: selectRange,
      removeItemFlag: removeItemFlagAction
      //userDataStatus:updateUserActivity
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchTOProps
)(App);
