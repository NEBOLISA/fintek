import React, { useState } from "react";
import  { createContext } from "react";

export const AppContext = createContext<{
  isLoanDetailsOpen: number | null;
  setIsLoanDetailsOpen: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  isLoanDetailsOpen: null,
  setIsLoanDetailsOpen: () => {},
});

// export default AppContext;

import { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isLoanDetailsOpen, setIsLoanDetailsOpen] = React.useState<number | null>(null);
  return (
    <AppContext.Provider value={{ isLoanDetailsOpen, setIsLoanDetailsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
