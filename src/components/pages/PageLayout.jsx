import { AppPages } from '../../utils/definitions/constants';
import { useAppPageContext } from '../../utils/hooks/contextBased/useAppPage';
import { HomePage } from './HomePage/HomePage';
import Calendar from './Calendar';

export const PageLayout = () => {
  const { appPage: page } = useAppPageContext();

  return (
    <main>
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
