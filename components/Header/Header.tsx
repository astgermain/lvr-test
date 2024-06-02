import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Search from "../Search/Search";
import logo from "/public/logo.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {}, []);

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
      <header style={{ width: "100vw", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            background: "#fff",
            padding: "calc(1rem - 1px)",
            height: "100px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link href="/">
              <Image src={logo} width={60} height={60} />
            </Link>
            <div style={{ width: "400px" }}>
              <Search placeholder="Search" autoFocus />
            </div>
          </div>
          {!loggedIn ? (
            <Link href="/login">Login</Link>
          ) : (
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 60, height: 60 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          )}
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
      </header>
    </Fragment>
  );
};

export default Header;
