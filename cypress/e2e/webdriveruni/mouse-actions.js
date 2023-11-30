/// <reference types="Cypress" />
import 'cypress-real-events';

describe('Implement mouse actions', () => {
  it('Scroll element into view', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
    cy.get('#div-hover').should('be.visible');
  });

  it('Drag and drop element', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
    cy.get('#div-hover').should('be.visible');

    cy.get('#draggable').trigger('mousedown', { which: 1 });
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
  });

  it('Double click element', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
    cy.get('#div-hover').should('be.visible');

    cy.get('#double-click').dblclick();
    cy.get('#double-click').should('have.class', 'double');

  });

  it.only('Hover over an element', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
    cy.get('#div-hover').should('be.visible');
    cy.get('#div-hover .dropdown').first().realHover();
    cy.get('.list-alert').first().should('be.visible');
  });
});