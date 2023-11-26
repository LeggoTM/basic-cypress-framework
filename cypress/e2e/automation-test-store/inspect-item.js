/// <reference types="Cypress" />

describe('Inspect store items using chain of commands', () => {
    it('Click on the first item using contains', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(
            ($itemText) => {
                console.log('Selected the item: ' + $itemText.text());
            }
        );
    });

    it('Click on the first item using index', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').first().click(); // .eq(0) can also be used
    });

    it('Click on the first item using find', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
});