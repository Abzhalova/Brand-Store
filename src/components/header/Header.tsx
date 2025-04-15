import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { pages } from "../../constants/constants";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FAFAFA" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 100,
              display: { xs: "none", md: "flex" },
              fontFamily: "Alata",
              fontWeight: 500,
              letterSpacing: "2px",
              color: "#374151",
              textDecoration: "none",
            }}
          >
            Бренд Товары
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "#374151" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.id}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    fontFamily: "Almarai",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#6B7280",
                      marginLeft: "30px",
                    }}
                  >
                    {page.title}
                  </Typography>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: "0.2rem",
              color: "#374151",
              textDecoration: "none",
            }}
          >
            Бренд Товары
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={page.path}
                key={page.id}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  fontFamily: "Almarai",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6B7280",
                    marginLeft: "30px",
                  }}
                >
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
