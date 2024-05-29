import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as needed

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
          <Button color="inherit" component={Link} to="/paid-courses">
            Cursos Premium
          </Button>
          <Button color="inherit" component={Link} to="/free-tutorials">
            Material Gratis
          </Button>
        </Box>
        {/*<Button color="inherit" component={Link} to="/signin">
          Inicia Sesión
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Regístrate
        </Button>*/}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

