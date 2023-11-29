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

    it('Validate properties of Contact Us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        
        // Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');

        // Jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(($labelText) => {
            const firstNameLabelText = $labelText.find('#field_11').text();
            expect(firstNameLabelText).to.contain('First name:');

            // Closure
            cy.get('#field_11').then(($fnText) => {
                cy.log($fnText.text());
            })
        })
    });
});