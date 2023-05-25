import React, { useState, useEffect, FC, PropsWithChildren } from 'react';
import {
  HashRouter,
  useRoutes,
  RouteObject,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Code from './pages/Test';
import { StoresProvider, stores } from './stores/index';

const RedirectWrap = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/index');
  }, []);
  return <></>;
};

const rootRouter: Array<RouteObject> = [
  {
    path: '/index',
    element: <Code />,
  },
  {
    path: '*',
    element: <RedirectWrap />,
  },
];

const WrapperRoutes = () => {
  return useRoutes(rootRouter);
};

const Index = () => {
  return (
    <StoresProvider value={stores}>
      <HashRouter>
        <WrapperRoutes />
      </HashRouter>
    </StoresProvider>
  );
};

export default Index;
