import type { CSSProperties } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { AppHeader } from '../blocks/AppHeader';
import { useAppLocation } from '../../utils/hooks/useAppLocation';
import { AppPages, AppRoutes } from '../../utils/definitions/routeDefinitions';

export const PageLayout = () => {
  const appPage = useAppLocation();
  const navigate = useNavigate();

  if (appPage === AppPages.Invalid) {
    console.error(
      `Invalid path at '${location.pathname}'. Redirecting to home page`,
    );
    navigate(AppRoutes[AppPages.Home]);
  }

  return (
    <>
      {/* Uses <header> so no need to rewrap */}
      <AppHeader />

      <main style={styles.mainContainer}>
        <h2>~ Under Construction ~</h2>
        <Outlet />
      </main>
    </>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
} satisfies Record<string, CSSProperties>;
