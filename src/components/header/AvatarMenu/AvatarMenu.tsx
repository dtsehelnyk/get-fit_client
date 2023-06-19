import { useState, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material';
import { PROFILE_LINKS } from '../../../utils/consts';
import { UserContextType } from '../../../context/UserContext';
import { decapitalizeFirstChart } from '../../../utils/formatting';

type AvatarMenuProps = UserContextType;

const AvatarMenu: React.FC<Record<'userContext', AvatarMenuProps>> = ({ userContext }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    userContext.setUser(null);
  };

  const handleRedirect = (link: typeof PROFILE_LINKS[number]) => {
    handleCloseUserMenu();

    if (link === 'Logout') {
      handleLogout();

      navigate(`/login`);
      return;
    }

    const route = decapitalizeFirstChart(link);
    navigate(`/${route}`);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={userContext.user?.username} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {PROFILE_LINKS.map((link) => (
          <MenuItem key={link} onClick={() => handleRedirect(link)}>
            <Typography textAlign="center">{link}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default AvatarMenu;
