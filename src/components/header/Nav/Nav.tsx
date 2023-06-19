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
import { HEADER_NAV_PAGES, MENU } from '../../../utils/consts';
import { useNavigate } from 'react-router-dom';
import { decapitalizeFirstChart } from '../../../utils/formatting';

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavRedirect = (link: string) => {
    handleCloseNavMenu();
    const route = decapitalizeFirstChart(link);
    
    navigate(`/${route}`);
  };

  return (
    <>
      {/* desktop */}
      <Box className={styles.nav}>
        {HEADER_NAV_PAGES.map((page) => (
          <Button
            key={page}
            onClick={() => handleNavRedirect(page)}
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
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          {MENU}
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
            <MenuItem key={page} onClick={() => handleNavRedirect(page)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export default Nav;
