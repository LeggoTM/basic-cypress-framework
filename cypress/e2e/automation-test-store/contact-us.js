/// <reference types="Cypress" />

describe('Test Contact Us form of Automation Test Store', () => {
  it('Should be able to submit contact-us form successfully', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('a[href$="/contact"]').click().then(
      ($itemHandle) => {
        cy.log(`Text of the element: ${$itemHandle.text()}`);
      }
    );
    // cy.xpath('//*[contains(@href, "/contact")]').click();
    cy.get('#ContactUsFrm_first_name').type('Tanmay');
    cy.get('#ContactUsFrm_email').type('tanmay@mail.com');
    cy.get('#ContactUsFrm_email').should('have.value', 'tanmay@mail.com');
    cy.get('#ContactUsFrm_enquiry').type('Submitting this form!');
    cy.get('button[title="Submit"]').click();
    cy.get('div.contentpanel p').eq(1).should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    cy.log('Test Completed! shown in Cypress Log');

    console.log("Test Completed!"); // Gets executed in the beginning
  });

});