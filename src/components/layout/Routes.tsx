import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Page404 from '../../services/etc/pages/Page404';
import { MainPage } from '../../services/etc/pages/MainPage';

export type RoutePath = '/';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Page404 />} />
    </ReactRouterRoutes>
  );
};
