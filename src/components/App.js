import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home.js'));
const Template = lazy(() => import('../pages/Template/Template.js'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound.js'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="template" element={<Template />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
