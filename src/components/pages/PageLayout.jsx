import { AppPages } from '../../utils/definitions/constants';
import { useAppPageContext } from '../../utils/hooks/contextBased/useAppPage';
import { HomePage } from './HomePage/HomePage';

export const PageLayout = () => {
    const { appPage: page } = useAppPageContext();

    return (
        <main>
            <h2>~ Under Construction ~</h2>
            {page === AppPages.Home ? (
                <HomePage />
            ) : page === AppPages.Mission ? (
                <div>missing</div>
            ) : page === AppPages.ContactUs ? (
                <div>contact us</div>
            ) : page === AppPages.AboutUs ? (
                <div>about us</div>
            ) : (
                <div>Don't know what page this is</div>
            )}
        </main>
    );
};
