import { createContext, useContext, useMemo, useState } from "react";
import { AppPages } from "../../definitions/constants";

export interface AppPageContext {
  appPage: AppPages;
  setPage: (newPage: AppPages) => void;
}

const appPageContext = createContext<AppPageContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const AppPageProvider = (props: Props) => {
  const [appPage, setAppPage] = useState(AppPages.Home);

  const contextValue = useMemo(
    (): AppPageContext => ({
      appPage,
      setPage: (newPage) => setAppPage(newPage),
    }),
    [appPage],
  );

  return (
    <appPageContext.Provider value={contextValue}>
      {props.children}
    </appPageContext.Provider>
  );
};

export const useAppPageContext = () => {
  const context = useContext(appPageContext);
  if (context === null) {
    throw new Error(
      "Invalid usage of 'useAppPageContext'. Must have an 'AppPageProvider' placed above it in the DOM hierarchy",
    );
  }
  return context;
};
