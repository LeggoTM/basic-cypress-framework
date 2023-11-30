/// <reference types="Cypress" />

describe('Handle checkboxes', () => {
  it('Check and uncheck checkboxes', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    cy.get('#checkboxes input').eq(0).check().should('be.checked');
    cy.get('#checkboxes input').eq(1).check().should('be.checked');
    cy.get('#checkboxes input').eq(0).uncheck().should('not.be.checked');
  });

  it('Check multiple checkboxes at once', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    cy.get('#checkboxes input').check(['option-1', 'option-2', 'option-3', 'option-4'])
      .should('be.checked');

  });
});