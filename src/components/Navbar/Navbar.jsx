import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Button, Link } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../store/useAuthStore";
import useCart from "../../hook/useCart";
import useThemeStore from "../../store/useTheamStore";
import i18n from "../../i18next";
import SearchBar from './../SearchBar/SearchBar';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const { t } = useTranslation();

  const token = useAuthStore((state) => state.token);
  const LogOut = useAuthStore((state) => state.LogOut);
  const { data } = useCart();
  const mode = useThemeStore((state) => state.mode);
  const ToggleTheme = useThemeStore((state) => state.ToggleTheme);

  const Items = data?.items?.length || 0;
  const textColor = mode === "light" ? "#000000" : "#ffffff";

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const HandleLogout = () => {
    handleCloseNavMenu();
    Swal.fire({
      title: t("Are you sure?"),
      text: t("You will be logged out, and you won't be able to revert this action."),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("Yes, log out!"),
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut();
        Swal.fire({
          title: t("Logged out!"),
          text: t("You have been successfully logged out."),
          icon: "success",
        });
      }
    });
  };

  const getUnderLineAtCurrrentPage = (path) => {
    return location.pathname === path ? "always" : "none";
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: mode === "light" ? "white" : "#121212", boxShadow: 1 }}>
      <Toolbar>

        
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: textColor }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Box sx={{ px: 2, py: 1, width: '250px' }}>
              <SearchBar hideTitle={true} />
            </Box>

            <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/">
              <Typography textAlign="center">{t("Home")}</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/contact">
              <Typography textAlign="center">{t("Contact")}</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/about">
              <Typography textAlign="center">{t("About")}</Typography>
            </MenuItem>

            {!token && (
              <MenuItem onClick={handleCloseNavMenu} component={RouterLink} to="/signup">
                <Typography textAlign="center">{t("Signup")}</Typography>
              </MenuItem>
            )}
            {token && (
              <MenuItem onClick={HandleLogout}>
                <Typography textAlign="center" color="error">{t("Logout")}</Typography>
              </MenuItem>
            )}
          </Menu>
        </Box>

        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: { xs: 1, md: 0 },
            mr: { md: 2 },
            textDecoration: "none",
            color: textColor,
            fontWeight: "bold",
            letterSpacing: ".1rem",
            whiteSpace: "nowrap"
          }}
        >
          {t("Exclusive")}
        </Typography>

       
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: 2, alignItems: 'center' }}>
          <Link component={RouterLink} to="/" underline={getUnderLineAtCurrrentPage("/")} sx={{ color: textColor, fontWeight: 500, '&:hover': { color: '#1976d2' } }}>
            {t("Home")}
          </Link>
          <Link component={RouterLink} to="/contact" underline={getUnderLineAtCurrrentPage("/contact")} sx={{ color: textColor, fontWeight: 500, '&:hover': { color: '#1976d2' } }}>
            {t("Contact")}
          </Link>
          <Link component={RouterLink} to="/about" underline={getUnderLineAtCurrrentPage("/about")} sx={{ color: textColor, fontWeight: 500, '&:hover': { color: '#1976d2' } }}>
            {t("About")}
          </Link>

          {!token && (
            <Link component={RouterLink} to="/signup" underline={getUnderLineAtCurrrentPage("/signup")} sx={{ color: textColor, fontWeight: 500, '&:hover': { color: '#1976d2' } }}>
              {t("Signup")}
            </Link>
          )}
          {token && (
            <Button onClick={HandleLogout}>
              <Typography color="error">{t("Logout")}</Typography>
            </Button>
          )}
        </Box>

     
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', mx: 2 }}>
          <Box sx={{ width: '100%', maxWidth: '400px' }}>
            <SearchBar hideTitle={true} />
          </Box>
        </Box>

    
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton onClick={changeLanguage} sx={{ color: textColor }}>
            <LanguageIcon />
            <Typography variant="caption" sx={{ ml: 0.5, fontWeight: "bold" }}>
              {i18n.language === "en" ? "AR" : "EN"}
            </Typography>
          </IconButton>

          <IconButton onClick={ToggleTheme} sx={{ color: textColor }}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          {token && (
            <IconButton component={RouterLink} to="/profile" sx={{ color: textColor }}>
              <AccountCircleIcon />
            </IconButton>
          )}
          {token && (
            <IconButton component={RouterLink} to="/Cart" sx={{ color: textColor }}>
              <Badge badgeContent={Items} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;