/// <reference types="Cypress" />

describe('Interact with dropdown lists', () => {
  it('Select element from dropdown list', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    
    cy.get('#dropdowm-menu-1').select('Python');
    cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven');
    cy.get('#dropdowm-menu-3').select('JavaScript');
  });
});