import { createContext, useState, useContext, useEffect } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const showNotification = (message) => {
    setNotification(message);
    setIsVisible(true);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setNotification(""), 500);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
      {notification && (
        <div
          className={`fixed top-0 right-0 mt-2 p-4 bg-black text-white shadow-lg transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {notification}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
