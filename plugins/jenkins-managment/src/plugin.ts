import {
  createPlugin,
  createRoutableExtension,
  createRouteRef,
  createSubRouteRef,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const jenkinsManagmentPlugin = createPlugin({
  id: 'jenkins-managment',
  routes: {
    root: rootRouteRef,
  },
});

export const JenkinsManagmentPage = jenkinsManagmentPlugin.provide(
  createRoutableExtension({
    name: 'JenkinsManagmentPage',
    component: () =>
      import('./components/HomePage').then(m => m.HomePage),
    mountPoint: rootRouteRef,
  }),
);
export const permissionRouteRef = createSubRouteRef({
  id: 'jenkins-managment/permission',
  path: '/permission',
  parent: rootRouteRef,
});
