import { createContext, useContext, useMemo, useState } from 'react';
import { AppPages } from '../../definitions/constants';

/**
 * @typedef AppPageContext
 * @type {object}
 * @property {AppPages} appPage
 * @property {(newPage: AppPages) => void} setPage
 */

/** @type {React.Context<AppPageContext | null>} */
const appPageContext = createContext(null);

export const AppPageProvider = (props) => {
    const [appPage, setAppPage] = useState(AppPages.Home);

    const contextValue = useMemo(() => {
        /** @type {AppPageContext} */
        const result = {
            appPage,
            setPage: (newPage) => setAppPage(newPage),
        };
        return result;
    }, [appPage]);

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
