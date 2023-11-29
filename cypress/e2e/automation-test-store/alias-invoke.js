/// <reference types="Cypress" />

describe('Implements alias and invoke', () => {
    it('Verify Product Name', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category"]').contains('Hair Care').click();
        cy.get('.maintext').should('have.text', 'Hair Care');
        cy.get('.fixed .prdocutname').eq(0).invoke('text').as('firstProductName');

        cy.get('@firstProductName').its('length').should('be.gt', 6);
        cy.get('@firstProductName').should('match', /Seaweed/i);
    });

    it('Verify Landing page products', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productCount');
        cy.get('@productCount').should('have.length', 16);
        cy.get('@productCount').find('.productcart').should('have.attr', 'title', 'Add to Cart');
    });

    it.only('Calculate total of normal and sale product prices', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('homeProducts');
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('productPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleProductPrice');

        let allItemsTotal = 0;

        cy.get('@productPrice').then(($priceText) => {
            let itemsTotal = 0;
            let productPrice = $priceText.split('$');
            for (let index = 0; index < productPrice.length; index++) {
                cy.log(productPrice[index]);
                itemsTotal += Number(productPrice[index]);
            }
            allItemsTotal += itemsTotal;
            cy.log('Total of non sale items ' + itemsTotal);
        })

        cy.get('@saleProductPrice').then(($priceText) => {
            let saleItemsTotal = 0;
            let saleProductPrice = $priceText.split('$');
            for (let index = 0; index < saleProductPrice.length; index++) {
                cy.log(saleProductPrice[index]);
                saleItemsTotal += Number(saleProductPrice[index]);
            }
            allItemsTotal += saleItemsTotal;
            cy.log('Total of sale items ' + saleItemsTotal);
        })
            .then(() => {
                cy.log('Total of all items ' + allItemsTotal);
                expect(allItemsTotal).to.eql(660.5);
            })

    });
});