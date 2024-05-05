import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * jenkinsManagementBackendPlugin backend plugin
 *
 * @public
 */
export const jenkinsManagementBackendPlugin = createBackendPlugin({
  pluginId: 'jenkins-management-backend',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
      },
      async init({
        httpRouter,
        logger,
      }) {
        httpRouter.use(
          await createRouter({
            logger,
          }),
        );
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });
      },
    });
  },
});
