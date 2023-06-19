import { useContext } from 'react';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Button,
    Container,
    Toolbar,
} from "@mui/material";

import { Nav } from "./Nav";
import { Logo } from "../Logo";
import AvatarMenu from "./AvatarMenu";
import { UserContext } from '../../context/UserContext';
import { LOGIN, LOGIN_ROUTE, REGISTER, REGISTRATION_ROUTE } from '../../utils/consts';
import RedirectButton from '../RedirectButton';

const Header: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <FitnessCenterRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <Nav />

          {userContext?.user
            ? <AvatarMenu userContext={userContext} />
            : (
              <div className={styles.authButtons}>
                <RedirectButton route={`/${LOGIN_ROUTE}`}>{LOGIN}</RedirectButton>
                <RedirectButton route={`/${REGISTRATION_ROUTE}`}>{REGISTER}</RedirectButton>
              </div>
            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
