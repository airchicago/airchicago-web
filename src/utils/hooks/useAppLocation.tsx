import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AppPages, AppRoutes } from '../definitions/routeDefinitions';

export const useAppLocation = (): AppPages => {
  const location = useLocation();

  const appPage = useMemo(() => {
    if (location.pathname === '/') {
      return AppPages.Home;
    }
    const pageEntry = Object.entries(AppRoutes)
      .map((entry) => [+entry[0], entry[1]] as [number, string])
      .filter((entry) => entry[0] !== AppPages.Home)
      .find((entry) => location.pathname.startsWith(entry[1]));
    if (!pageEntry) {
      return AppPages.Invalid;
    }
    return pageEntry[0] as AppPages;
  }, [location.pathname]);

  return appPage;
};
