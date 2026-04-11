import { AppPages } from '../../utils/definitions/constants';
import { useAppPageContext } from '../../utils/hooks/contextBased/useAppPage';
import { HomePage } from './HomePage';
import Calendar from '../blocks/Calendar';
import type { CSSProperties } from 'react';

export const PageLayout = () => {
  const { appPage: page } = useAppPageContext();

  return (
    <main style={styles.mainContainer}>
      <h2>~ Under Construction ~</h2>
      {page === AppPages.Home ? (
        <HomePage />
      ) : page === AppPages.Mission ? (
        <div></div>
      ) : page === AppPages.ContactUs ? (
        <div></div>
      ) : page === AppPages.AboutUs ? (
        <div></div>
      ) : (
        <div></div>
      )}
      <Calendar />
    </main>
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
