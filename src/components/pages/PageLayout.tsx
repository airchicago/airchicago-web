import type { CSSProperties } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { AppHeader } from '../blocks/AppHeader';
import { useAppLocation } from '../../utils/hooks/useAppLocation';
import { AppPages, AppRoutes } from '../../utils/definitions/routeDefinitions';
import { SocialWidgets } from '../blocks/SocialWidgets';

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
        <SocialWidgets />
      </main>
    </>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    flexWrap: 'wrap',
    flexGrow: 1,
    boxSizing: 'border-box',
    marginRight: '15%',
  },
} satisfies Record<string, CSSProperties>;
