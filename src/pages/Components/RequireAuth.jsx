import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../firebase';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(app);

  useEffect(() => {
    const checkAuth = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate('/signup');
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/signup');
      }
    });

    checkAuth();

    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged listener when the component unmounts
    };
  }, [auth, navigate, location.pathname]);

  return children;
};

export default RequireAuth;
