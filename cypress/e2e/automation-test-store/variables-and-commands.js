/// <reference types="Cypress" />

describe('Exploring variables and commands', () => {
    it('Navigate to Makeup page', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category"]').contains('Makeup').click();
        
        // Below code fails

        // const headerElement = cy.get('h1 .maintext');
        // cy.log(headerElement.text());

        // Proper approach
        cy.get('h1 .maintext').then(($headerElement) => {
            const headerText = $headerElement.text();
            cy.log(headerText);
            expect(headerText).to.eq('Makeup');
        })
    });
});