import { createRouteRef } from '@backstage/core-plugin-api';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { permissionRouteRef } from './plugin'
import { HomePage } from './components/HomePage';
import { JenkinsPermissionPage } from './components/JenkinsPermissionPage';
export const rootRouteRef = createRouteRef({
  id: 'jenkins-managment',
});

export const Router = () => {

  return (
    <Routes>
      <Route path="/"  element={<HomePage />}/>
      <Route path={`/${permissionRouteRef.path}`} element={<JenkinsPermissionPage />} />
      
    </Routes>
  );
};
