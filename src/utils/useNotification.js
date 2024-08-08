import { createContext, useState, useContext, useEffect } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  const showNotification = (message) => {
    setNotification(message);
    setIsVisible(true);
    const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => setNotification(""), 400);
          },2000);
  };

  // useEffect(() => {
  //   // setIsVisible(true);
  //   if (notification) {
  //     const timer = setTimeout(() => {
  //       setIsVisible(false);
  //       setTimeout(() => setNotification(""), 400);
  //     },2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [notification]);

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
      {notification && (
        <div
          className={`fixed top-0 right-0 mt-2 p-4 bg-black text-white shadow-lg transition-all duration-500 max-h-[55px] ease-in-out overflow-hidden ${
            isVisible ? "max-w-[400px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          {notification}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
