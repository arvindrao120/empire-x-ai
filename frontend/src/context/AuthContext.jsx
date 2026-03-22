import { createContext, useContext, useEffect, useState } from 'react';
import { getMe } from '../api/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getMe()
    .then(res => {
// console.log("User data:", res.data); 
     setUser(res.data.data);
    })
    .catch((err) => {
      console.log("Error:", err);
      setUser(null);
    })
    .finally(() => setLoading(false));
}, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);