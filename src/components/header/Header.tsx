import styles from './Header.module.scss';
import {
    AppBar,
    Box,
    Container,
    Toolbar,
} from "@mui/material";

import { Nav } from "./Nav";
import { Logo } from "../Logo";
import AvatarMenu from "./AvatarMenu";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Header: React.FC = () => {
  const userContext = useContext(UserContext);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <FitnessCenterRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box className={styles.logoWrapper}>
            <Logo /> 
          </Box> 
          <Nav />
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <AvatarMenu user={userContext?.user} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
