import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Search from "../Search/Search";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e?.currentTarget);
    setOpen(true);
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-evenly",
          background: "#c2e5fa",
        }}
      >
        <div>Logo</div>
        <div style={{ width: "400px" }}>
          <Search placeholder="Search" autoFocus />
        </div>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem>
          <a href="#">Link 1</a>
        </MenuItem>
        <MenuItem>
          <div>Link 2</div>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default Header;
