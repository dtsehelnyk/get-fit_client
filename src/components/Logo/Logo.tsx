import { Typography } from "@mui/material";
import { GET_FIT } from "../../utils/consts";

const Logo: React.FC = () => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {GET_FIT}
    </Typography>
  );
}

export default Logo;
