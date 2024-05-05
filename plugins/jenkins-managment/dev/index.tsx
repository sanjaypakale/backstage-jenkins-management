import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { jenkinsManagmentPlugin, JenkinsManagmentPage } from '../src/plugin';

createDevApp()
  .registerPlugin(jenkinsManagmentPlugin)
  .addPage({
    element: <JenkinsManagmentPage />,
    title: 'Root Page',
    path: '/jenkins-managment',
  })
  .render();
