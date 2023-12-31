// privateroute.jsx
import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/Acontext";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext);
    return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
