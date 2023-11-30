/// <reference types="Cypress" />

describe('Interact with autocomplete dropdown lists', () => {
  it('Select element from autocomplete dropdown list', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM

    cy.get('input[name="food-item"]').type('a');
    cy.get('#myInputautocomplete-list').should('be.visible');
    cy.get('#myInputautocomplete-list > *').each(($dropdownElement) => {
      const item = $dropdownElement.text();
      const itemToSelect = 'Avacado';
      if (item === itemToSelect) {
        cy.wrap($dropdownElement).click();
        cy.get('#submit-button').click();
        cy.url().should('include', itemToSelect);
      }
    });
  });
});