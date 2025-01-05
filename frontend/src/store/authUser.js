import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: false,
  isLogginOut: false,
  isLoggingIn: false,

  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const res = await axios.post("/api/v1/auth/signup", credentials);
      set({ user: res.data.user });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error in signup: ", error.message);
      toast.error(error.response.data.message || "An error occurred");
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const res = await axios.post("/api/v1/auth/login", credentials);
      set({ user: res.data.user });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error is Login controller: ", error.message);
      toast.error(error.response.data.message || "Login Failed");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    set({ isLogginOut: true });
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null });
      toast.success("LogOut Successfull");
    } catch (error) {
      console.log("Error in logout controller: ", error.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isLogginOut: false });
    }
  },

  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axios.get("/api/v1/auth/authCheck");
      set({ user: res.data.user });
    } catch (error) {
      set({ user: null });
      console.log("Error in authCheck Controller: ", error.message);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  
}));
