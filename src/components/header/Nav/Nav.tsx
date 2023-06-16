import { useState, MouseEvent } from 'react';
import styles from './Nav.module.scss';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'
import { HEADER_NAV_PAGES } from '../../../utils/consts';

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* desktop */}
      <Box className={styles.nav}>
        {HEADER_NAV_PAGES.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            className={styles.button}
          >
            {page}
          </Button>
        ))}
      </Box>

      {/* mobile */}
      <Box className={styles.menu}>
        <IconButton
          className={styles.menuButton}
          // aria-label="account of current user"
          // aria-controls="menu-appbar"
          // aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          {'Menu'}
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
          className={styles.mobileMenu}
        >
          {HEADER_NAV_PAGES.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export default Nav;
