import React from "react";
import { AppBar ,Toolbar , IconButton ,Badge ,Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';


export default ( {props , handleClick , badgeCount}) => {

  return (
    <AppBar position='fixed'>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Employee Home
          </Typography>
          
            <IconButton color="inherit" onClick={handleClick}>
              <Badge badgeContent={badgeCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          
        </Toolbar>
      </AppBar>
  );
};

 
{/* <header className="header">
<h2>NewComer</h2>
<h5 className="wishlabel">
  Wishlist
  <input
    className="wish-button"
    type="button"
    value={
      this.props.wishListProp
        ? this.props.wishListProp.fragment.length
        : "0"
    }
    onClick={this.handleClick}
  />
</h5>
</header> */}