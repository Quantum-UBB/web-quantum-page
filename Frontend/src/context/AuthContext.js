"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUser, validateSession } from "../services/authService";

const AuthContext = createContext();

/**
 * Proveedor de Autenticación (AuthProvider).
 * Gestiona el estado global del usuario, el token JWT y las funciones de login/logout.
 * Persiste la sesión en localStorage.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (storedToken) {
        try {
          // Validar el token con el backend usando el servicio
          const userData = await validateSession();
          
          setToken(storedToken);
          setUser(userData);
          // Actualizar el usuario en localStorage por si hubo cambios en el rol/datos
          localStorage.setItem("user", JSON.stringify(userData));
        } catch (err) {
          console.error("Error de conexión al validar sesión:", err);
          // Si el backend no responde o el token es inválido
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  /**
   * Realiza el inicio de sesión usando el servicio de autenticación.
   * 
   * @param {string} email - Correo del usuario.
   * @param {string} password - Contraseña.
   * @returns {Promise<Object>} Resultado de la operación {success, message}.
   */
  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      const { token, user: userData } = data;

      // Guardar en estado global
      setToken(token);
      setUser(userData);

      // Guardar en localStorage para persistencia
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      return { success: true };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, message: error.message };
    }
  };

  /**
   * Cierra la sesión del usuario, eliminando el token y redirigiendo a inicio.
   */
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
