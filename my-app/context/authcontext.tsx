import API from "@/lib/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStoredToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await fetchUserProfile(storedToken);
      }
      setLoading(false);
    };

    loadStoredToken();
  }, []);

  const fetchUserProfile = async (authToken: string) => {
    try {
      const response = await API.get("/users/profile", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setUser(response.data.user);
    } catch (err) {
      console.log("Profile fetch failed", err);
      logout(); // the token may be invald
    }
  };

  const login = async (email: string, password: string) => {
    const res = await API.post("/users/login", { email, password });
    const { token: jwt, user } = res.data;
    await AsyncStorage.setItem("token", jwt);
    setToken(jwt);
    setUser(user);
  };

  const register = async (username: string, email: string, password: string) => {
    const res = await API.post("/users/register", { username, email, password });
    const { token: jwt, user } = res.data;
    await AsyncStorage.setItem("token", jwt);
    setToken(jwt);
    setUser(user);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
