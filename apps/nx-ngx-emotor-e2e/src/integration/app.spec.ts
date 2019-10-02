import { getGreeting } from '../support/app.po';

describe('nx-ngx-emotor', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-ngx-emotor!');
  });
});
