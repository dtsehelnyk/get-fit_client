import { ReactElement, ReactNode, FC } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

type RedirectButtonProps = {
  children: ReactElement | ReactNode | string;
  route: string;
}

const RedirectButton: FC<RedirectButtonProps> = ({ children, route }) => {
  const navigate = useNavigate();
  
  return (
    <Button
      sx={{fontSize: '14px', color: '#fff'}}
      onClick={() => navigate(route)}
    >
      {children}
    </Button>
  )
}

export default RedirectButton