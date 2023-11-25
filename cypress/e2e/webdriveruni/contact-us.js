/// <reference types="Cypress" />

describe('Test Contact Us form', () => {
  it('Should be able to submit form successfully', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Tanmay');
    cy.get('[name="last_name"]').type('Mohapatra');
    cy.get('[name="email"]').type('tanmay@mail.com');
    cy.get('[name="message"]').type('This is a test message');
    cy.get('[value="SUBMIT"]').click();
    cy.get('#contact_reply h1').should('have.text', 'Thank You for your Message!');
  });

  it('Should not be able to submit form', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Tanmay');
    cy.get('[name="last_name"]').type('Mohapatra');
    // cy.get('[name="email"]').type('tanmay@mail.com');
    cy.get('[name="message"]').type('This is a test message');
    cy.get('[value="SUBMIT"]').click();
    cy.get('body').should('contain', 'Error: all fields are required');
  });
});