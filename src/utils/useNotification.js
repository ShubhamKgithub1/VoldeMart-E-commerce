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
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
      {notification && (
        <div
          className={`flex items-center fixed top-0 right-0 font-normal text-sm lg:text-xl py-[1rem] md:py-[1.5rem] lg:py-8 mt-2 px-2 md:px-3 lg:px-4 bg-black text-white shadow-lg transition-all duration-500 max-h-[30px] sm:max-h-[40px] lg:max-h-[50px] overflow-hidden ${
            isVisible ? "max-w-[300px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          {notification}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
