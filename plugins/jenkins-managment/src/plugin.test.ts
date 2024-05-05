import { jenkinsManagmentPlugin } from './plugin';

describe('jenkins-managment', () => {
  it('should export plugin', () => {
    expect(jenkinsManagmentPlugin).toBeDefined();
  });
});
