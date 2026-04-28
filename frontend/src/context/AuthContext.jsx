import { createContext, useContext, useEffect, useState } from 'react';
import { getMe } from '../api/index';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  getMe()
    .then(res => {
      console.log("getMe response:", res.data); 
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