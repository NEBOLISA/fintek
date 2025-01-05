import React, { useState } from "react";
import  { createContext } from "react";

export const AppContext = createContext<{
  isLoanDetailsOpen: number | null;
  setIsLoanDetailsOpen: React.Dispatch<React.SetStateAction<number | null>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isLoanDetailsOpen: null,
  setIsLoanDetailsOpen: () => {},
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
});

// export default AppContext;

import { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isLoanDetailsOpen, setIsLoanDetailsOpen] = React.useState<number | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false)
  return (
    <AppContext.Provider value={{ isLoanDetailsOpen, setIsLoanDetailsOpen,, setIsSidebarisSidebarOpenOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
