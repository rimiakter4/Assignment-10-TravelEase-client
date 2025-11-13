import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Authcontext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10 text-xl font-semibold">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
