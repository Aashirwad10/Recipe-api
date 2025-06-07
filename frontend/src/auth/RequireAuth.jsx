import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

function RequireAuth({ children }) {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    // Redirect to homepage if not signed in
    return <Navigate to="/" replace />;
  }

  // If signed in, render the children components (protected page)
  return children;
}

export default RequireAuth;
