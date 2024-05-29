import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Container, Typography } from '@mui/material';

const Account = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.uid === userId) {
        setUser(currentUser);
      }
    });
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4">Welcome, {user.email}!</Typography>
      {/* Add more user info as needed */}
    </Container>
  );
};

export default Account;

