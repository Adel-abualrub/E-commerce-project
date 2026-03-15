import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button, CircularProgress, Link } from "@mui/material";
import Cart from "../../pages/cart/Cart";
import useAuthStore from "../../store/useAuthStore";
import Swal from "sweetalert2";
import useCart from "../../hook/useCart";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

const Navbar = () => {

  const location = useLocation();
  const LogOut = useAuthStore((state) => state.LogOut);
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useCart();
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  
  const Items = data?.items?.length || 0;
  console.log(Items);
  const token = useAuthStore((state) => state.token);

  const HandleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        LogOut();
      }
    });
  };

  const getUnderLineAtCurrrentPage = (path) => {
    return location.pathname === path ? "always" : "none";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#000000" }}
          >
            Exclusive
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              component={RouterLink}
              color="#000000"
              underline={getUnderLineAtCurrrentPage("/")}
              to={"/"}
            >
              {t("Home")}
            </Link>

            <Link
              component={RouterLink}
              color="#000000"
              underline={getUnderLineAtCurrrentPage("/contact")}
              to={"/contact"}
            >
              {t("Contact")}
            </Link>

            <Link
              component={RouterLink}
              color="#000000"
              underline={getUnderLineAtCurrrentPage("/about")}
              to={"/about"}
            >
              {t("About")}
            </Link>

            <Link
              component={RouterLink}
              color="#000000"
              underline={getUnderLineAtCurrrentPage("/signup")}
              to={"/signup"}
            >
              {t("Signup")}
            </Link>

            <Link
              component={Button}
              color="#000000"
              onClick={HandleLogout}
            >
              {t("Logout")}
            </Link>
 <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('ar')}>ar</button>
            <IconButton sx={{ color: "black" }}>
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton
              component={RouterLink}
              to={"/Cart"}
              sx={{ color: "black" }}
            >
              <Badge badgeContent={Items} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;