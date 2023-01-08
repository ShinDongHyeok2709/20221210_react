import { createContext, useContext, useState } from "react";

const UserIdContext = createContext(null);
const UserIdDispatchContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  return (
    <UserIdContext.Provider value={userId}>
      <UserIdDispatchContext.Provider value={setUserId}>
        {children}
      </UserIdDispatchContext.Provider>
    </UserIdContext.Provider>
  );
};

export const useUserIdContext = () => {
  const context = useContext(UserIdContext);
  if (!context) throw new Error("No Provider");
  return context;
};

export const useUserIdDispatchContext = () => {
  const context = useContext(UserIdDispatchContext);
  if (!context) throw new Error("No Provider");
  return context;
};
