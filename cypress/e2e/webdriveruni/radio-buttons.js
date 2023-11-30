/// <reference types="Cypress" />

describe('Handle Radio buttons', () => {
  it('Check specific radio buttons', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    
    cy.get('#radio-buttons input').first().check();
    cy.get('#radio-buttons input').eq(1).check();
    cy.get('#radio-buttons input').first().should('not.be.checked');

  });

  it('Validate state of specific radio buttons', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    
    cy.get('#radio-buttons-selected-disabled input').first().should('not.be.checked');
    cy.get('#radio-buttons-selected-disabled input').eq(1).should('be.disabled');
    cy.get('#radio-buttons-selected-disabled input').eq(2).should('be.checked');
  });
});