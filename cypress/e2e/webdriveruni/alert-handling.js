/// <reference types="Cypress" />

describe('Validate various JS alerts', () => {
  it('Handle JS alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('div h3').should('have.text', 'JavaScript Alerts');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('I am a JS Alert');
    });
    cy.get('ul button').contains('Click for JS Alert').click();
    cy.get('#result').should('have.text', 'You successfully clicked an alert');

  });

  it('Handle JS confirm OK', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('div h3').should('have.text', 'JavaScript Alerts');

    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('I am a JS Confirm');
      return true;
    });

    cy.get('ul button').contains('Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Ok');

  });

  it('Handle JS confirm Cancel', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('div h3').should('have.text', 'JavaScript Alerts');

    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('I am a JS Confirm');
      return false;
    });

    cy.get('ul button').contains('Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Cancel');

  });

  it.only('Handle JS confirm Prompt using Stub', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('div h3').should('have.text', 'JavaScript Alerts');

    cy.window().then(($promptWin) => {
      cy.stub($promptWin, 'prompt').returns('My custom prompt');
    });
    cy.get('ul button').contains('Click for JS Prompt').click();
    cy.get('#result').should('have.text', 'You entered: My custom prompt');

  });
});