"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
          // Validar el token con el backend
          const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
          const response = await fetch(`${API_URL}/users/me`, {
            headers: {
              "Authorization": `Bearer ${storedToken}`,
              "ngrok-skip-browser-warning": "69420"
            },
          });

          if (response.ok) {
            const userData = await response.json();
            setToken(storedToken);
            setUser(userData);
            // Actualizar el usuario en localStorage por si hubo cambios en el rol/datos
            localStorage.setItem("user", JSON.stringify(userData));
          } else {
            // Token inválido o expirado
            console.warn("Sesión expirada o inválida, cerrando sesión...");
            logout();
          }
        } catch (err) {
          console.error("Error de conexión al validar sesión:", err);
          // Si el backend no responde, mantenemos lo que hay en localStorage 
          // pero marcamos como no autenticado si prefieres mayor seguridad.
          // Por ahora, dejamos que el usuario intente usar lo que tiene.
          if (storedUser) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
          }
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  /**
   * Realiza el inicio de sesión contra la API.
   * 
   * @param {string} email - Correo del usuario.
   * @param {string} password - Contraseña.
   * @returns {Promise<Object>} Resultado de la operación {success, message}.
   */
  const login = async (email, password) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420"
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
