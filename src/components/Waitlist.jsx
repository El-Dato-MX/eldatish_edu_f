import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your firebase configuration file
import { Container, TextField, Button, Box, Typography } from '@mui/material';
//import { CSSTransition } from 'react-transition-group';
import mlb from '../assets/mlb.png'; // Adjust the path as needed
import mysqlLogo from '../assets/mysqlLogo.png';
import pythonLogo from '../assets/pythonLogo.png';
//import './Waitlist.css'; // Ensure you create this CSS file

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'waitlist'), { email });
      //setMessage('You have been added to the waitlist!');
      setEmail('');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <Container>
      {/*<Box display="flex" flexDirection="column" alignItems="center" mt={5}>*/}
	<Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
         >
        <Typography variant="h4" align="center" sx={{ width: '100%', marginBottom: 3 }}>¡Únete a nuestra lista de espera para cursos y aprende programación a partir de tu pasión por los deportes!</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth disabled={loading}>
            {loading ? '...' : 'Únete a la lista'}
          </Button>
        </form>
        {message && (
          <Box mt={2}>
            <Typography variant="body1">{message}</Typography>
          </Box>
        )}
        <Box display="flex" justifyContent="center" mt={3}>
          <img src={mysqlLogo} alt="MySQL Logo" style={{ width: 25, marginRight: 10 }} />
          <img src={pythonLogo} alt="Python Logo" style={{ width: 25, marginRight: 10 }} />
        </Box>
        {/* <CSSTransition
          in={showImage}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <img src={mlb} alt="mlb_logo" className="illustration" />
        </CSSTransition>*/}
      </Box>
    </Container>
  );
};

export default Waitlist;

