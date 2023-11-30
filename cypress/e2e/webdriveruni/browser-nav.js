/// <reference types="Cypress" />

describe('Validate homepage links', () => {
  it('Confirm links redirection', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    cy.url().should('match', /.*contactus/);
    cy.get('.section_header').should('have.text', 'CONTACT US');
    
    cy.go('back');
    cy.reload();
    // cy.reload(true); Force reload without using cache
    cy.get('#contact-us').should('be.visible');

    cy.go('forward');
    cy.url().should('match', /.*contactus/);
    cy.get('.section_header').should('have.text', 'CONTACT US');

  });
});