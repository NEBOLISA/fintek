import React, { createContext,  ReactNode } from "react";


export const AppContext = createContext<{
    isLoanDetailsOpen: number | null;
    setIsLoanDetailsOpen: React.Dispatch<React.SetStateAction<number | null>>;
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }>({
    isLoanDetailsOpen: null,
    setIsLoanDetailsOpen: (() => {}) as React.Dispatch<React.SetStateAction<number | null>>,
    isSidebarOpen: false,
    setIsSidebarOpen: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  });
// export default AppContext;



const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isLoanDetailsOpen, setIsLoanDetailsOpen] = React.useState<number | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  return (
    <AppContext.Provider value={{ isLoanDetailsOpen, setIsLoanDetailsOpen,isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
