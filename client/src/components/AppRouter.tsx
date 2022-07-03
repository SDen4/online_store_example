import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Context } from '../index';

import { authRoutes, publicRoutes } from '../routs';
import { SHOP_ROUTE } from '../utils/constants';

const AppRouter: React.FC = () => {
  // @ts-ignore
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
