import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pages } from "../../constants/constants";
import "./header.css";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { searchProducts } from "../../features/slices/productsSlice";
import useDebounce from "../../hooks/redux-hooks";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const debounceQuery = useDebounce(query, 400)

  useEffect(() => {
    if(debounceQuery){
      dispatch(searchProducts(debounceQuery));
    }
  }, [debounceQuery, dispatch]);

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
              mr: 2,
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
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Поиск товара..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              marginLeft: 50,
              width: 300,
              fontFamily: "Alata",
              letterSpacing: "2px",
            }}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              marginRight: "20px",
            }}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
