import { createBrowserRouter } from 'react-router';
import Calendar from '../../components/blocks/Calendar';
import { HomePage } from '../../components/pages/HomePage';
import { PageLayout } from '../../components/pages/PageLayout';

export enum AppPages {
  Invalid = 0,
  Home = 1,
  Mission = 2,
  AboutUs = 3,
  ContactUs = 4,
  Calendar = 5,
}

export const AppRoutes = {
  [AppPages.Home]: '/',
  [AppPages.Mission]: '/our-mission',
  [AppPages.AboutUs]: '/about-us',
  [AppPages.ContactUs]: '/contact-us',
  [AppPages.Calendar]: '/calendar',
} as const satisfies Omit<Record<AppPages, string>, AppPages.Invalid>;

export const routes = createBrowserRouter([
  {
    Component: PageLayout,
    children: [
      { index: true, Component: HomePage },
      { path: AppRoutes[AppPages.Calendar], Component: () => <Calendar /> },
      { path: AppRoutes[AppPages.Mission], Component: () => <div /> },
      { path: AppRoutes[AppPages.AboutUs], Component: () => <div /> },
      { path: AppRoutes[AppPages.ContactUs], Component: () => <div /> },
    ],
  },
]);
