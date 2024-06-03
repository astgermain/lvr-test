import React, { Fragment, useState, useEffect, useContext } from "react";
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
import { createClient } from "../../utils/supabase/client";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ user }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userVal, setUser] = useState(user);
  const [signout, setSignout] = useState(false);
  const path = usePathname();
  const router = useRouter();

  //I know this is duplicate but for sake of time
  const supabase = createClient();

  const getUser = async () => {
    const userData = await supabase.auth.getUser();
    setUser(userData?.data?.user);
    if (!userData?.data?.user && path === "/protected") {
      router.push("/login");
    }
    return userData;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    getUser();
  };

  useEffect(() => {
    getUser();
  }, [signout, path]);

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
              <Image src={logo} width={60} height={60} alt={"LVR Test Logo"} />
            </Link>
            <div style={{ width: "400px" }}>
              <Search placeholder="Search" autoFocus />
            </div>
          </div>
          {!userVal ? (
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
            <span>{userVal?.email}</span>
          </MenuItem>
          <MenuItem onClick={signOut}>
            <span>Sign Out</span>
          </MenuItem>
        </Menu>
      </header>
    </Fragment>
  );
};

export default Header;
