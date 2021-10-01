import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" style={{cursor: "pointer"}} onClick={() => window.location.replace("/")} component="div" sx={{ flexGrow: 1 }}>
            E-Commerce
          </Typography>

          {localStorage.getItem("userId") === null && (
            <Button
              color="inherit"
              onClick={() => window.location.replace("/login")}
            >
              Login
            </Button>
          )}

          {localStorage.getItem("userId") !== null && (
            <>
            <Button color="inherit" onClick={() => window.location.replace("/purchases")}>Purchases</Button>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >
              Logout
            </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
