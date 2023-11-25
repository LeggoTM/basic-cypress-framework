/// <reference types="Cypress" />

describe('Test Contact Us form of Automation Test Store', () => {
    it('Should be able to submit contact-us form successfully', () => {
      cy.visit('https://automationteststore.com/');
      //cy.get('a[href*="/contact"]').click();
      cy.xpath('//*[contains(@href, "/contact")]').click();
      cy.get('#ContactUsFrm_first_name').type('Tanmay');
      cy.get('#ContactUsFrm_email').type('tanmay@mail.com');
      cy.get('#ContactUsFrm_enquiry').type('Submitting this form!');
      cy.get('.col-md-6 > .btn').click();

    });

  });