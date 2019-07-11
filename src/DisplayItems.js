import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUserActivity } from "./SelectCategoryAction";
import updateWishListAction from "./WishListAction";

import {
  Grid,
  Typography,
  Button,
  Paper,
  List,
  ListItem
} from "@material-ui/core";
import { GridList, GridListTile } from "@material-ui/core";

class DisplayItems extends Component {
  constructor(props) {
    super(props);
    this.l = [];
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(event, name) {
    this.props.wishListprop(this.l[event.target.name]);
  }
  render() {
    this.l = this.props.dataItems.map((i, j) => {
      return (
        <ListItem>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2>{i.address}</h2>
            </Grid>
            <Grid item xs={12}>
              {/* <DisplayImages listOfImgLinks={i.images} /> */}
              <div>
                <GridList
                  cols={3}
                >
                  {i.images.map(img => (
                    <GridListTile>
                      <img src={img} />
                    </GridListTile>
                  ))}
                </GridList>
                </div>
            </Grid>

            <Grid container spacing={3} align="center">
              <Grid item xs={3}>
                <li>Availability: {i.occupancyAvailable}</li>
              </Grid>
              <Grid item xs={3}>
                <li>
                  Rent Agreement validity:
                  <br />
                  {this.props.isFlatData
                    ? i.rentAgreementVldty + " months"
                    : "NA"}
                </li>
              </Grid>
              <Grid item xs={3}>
                <li>Price: Rs. {i.price}</li>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                onClick={(event, j) => this.handleAddClick(event, j)}
                name={j}
              >
                {this.props.buttonProp}
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      );
    });

    return <List aria-label="Main mailbox folders">{this.l}</List>;
  }
}

function DisplayImages(props) {
  let ImageList = [];
  for (let i = 0; i < props.listOfImgLinks.length; i++)
    ImageList.push(<img src={props.listOfImgLinks[i]} />);

  return ImageList;
}

function mapStateToProps(state) {
  return {
    buttonProp: state.removeItemFlag
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      wishListprop: updateWishListAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DisplayItems);
