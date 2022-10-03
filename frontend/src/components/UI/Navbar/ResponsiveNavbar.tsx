import React, { FC, useState, useContext, MouseEvent } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { NavLink, Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

type MenuItemsProps = {
  handleCloseNavMenu: (e: MouseEvent<HTMLElement>) => void
};

const MenuItems: FC<MenuItemsProps> = ({handleCloseNavMenu}) => {
  return(
    <>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink to="/about" title="About app">About</NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink to="products" title="Products page" className="block w-full h-full">Products</NavLink>
      </MenuItem>
  </>
  );
};

const ResponsiveNavBar:FC = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
  };

  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar variant="dense" disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '.8rem',
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PRODUCTS APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItems handleCloseNavMenu={handleCloseNavMenu} />
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItems handleCloseNavMenu={handleCloseNavMenu}/>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuth
            ? <Button onClick={handleLogout} color="inherit">Logout</Button>
            : location.pathname !== '/login'
              && <Button color="inherit">
                    <Link className="underline-none text-inherit" to="login" state={location.pathname}>Login</Link>
                 </Button>
             }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavBar;
