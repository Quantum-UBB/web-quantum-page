"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar si hay token almacenado al iniciar.
    // localStorage = "Recordarme" activo. sessionStorage = sesión temporal.
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const storedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Error al parsear el usuario:", err);
        logout();
      }
    }
    setLoading(false);
  }, []);

  /**
   * Realiza el login contra el backend.
   * @param {string} email
   * @param {string} password
   * @param {boolean} rememberMe - Si true, persiste en localStorage (no expira al cerrar navegador).
   *                               Si false, guarda en sessionStorage (se borra al cerrar la pestaña).
   */
  const login = async (email, password, rememberMe = false) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const data = await response.json();
      const { token, user: userData } = data;

      // Guardar en estado global
      setToken(token);
      setUser(userData);

      // Guardar según preferencia del usuario
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", token);
      storage.setItem("user", JSON.stringify(userData));

      return { success: true };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    // Limpiar ambos storages al cerrar sesión
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    router.push("/");
  };

  const hasRole = (roles) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    hasRole,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
