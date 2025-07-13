import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAutoLogout = (timeout = 300000) => {
  const navigate = useNavigate();

  useEffect(() => {
    const events = ["mousemove", "keydown", "click"];
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        localStorage.removeItem("currentUser");
        alert("Session expired. You’ve been logged out due to inactivity.");
        navigate("/login");
      }, timeout);
    };

    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [navigate, timeout]);
};

export default useAutoLogout;
