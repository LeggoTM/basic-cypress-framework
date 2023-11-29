/// <reference types="Cypress" />

describe('Test Contact Us form', () => {
  it('Should be able to submit form successfully', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.title().should('include', 'Contact Us');
    cy.url().should('match', /.*\/contactus/);
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

  it('Implement multi tab handing', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click();
    cy.get('.section_header').should('have.text', 'CONTACT US');
    cy.get('[name="first_name"]').type('Tanmay');
    cy.get('[name="last_name"]').type('Mohapatra');
    // cy.get('[name="email"]').type('tanmay@mail.com');
    cy.get('[name="message"]').type('This is a test message');
    cy.get('[value="SUBMIT"]').click();
    cy.get('body').should('contain', 'Error: all fields are required');
  });
});