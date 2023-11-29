/// <reference types="Cypress" />

describe('Iterate over elements', () => {
    it('Log info of all hair care products', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category"]').contains('Hair Care').click();
        cy.get('.maintext').should('have.text', 'Hair Care');
        cy.get('.fixed .prdocutname').each(($element, index, $productList) => {
            cy.log('Index: ' + index + ' : ' + $element.text());
        })
    });

    it('Add a specific product to basket', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category"]').contains('Hair Care').click();
        cy.get('.maintext').should('have.text', 'Hair Care');
        cy.get('.fixed .prdocutname').each(($element, index, $productList) => {
            if ($element.text().includes('Curls to straight Shampoo')) {
                cy.wrap($element).click();
            }
        });
        cy.get('h1.productname').should('contain', 'Curls to straight Shampoo');
    });
});