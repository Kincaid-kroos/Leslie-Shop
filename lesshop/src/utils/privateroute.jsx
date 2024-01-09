import AuthContext from '../Context/Acontext';
import  { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;



