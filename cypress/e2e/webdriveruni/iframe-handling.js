/// <reference types="Cypress" />

import 'cypress-iframe';

describe('Handling Iframes', () => {
  it('Enter and handle Iframe without plugin', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#iframe').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    
    cy.get('#frame').then(($iframe) => {
      const iframeBody = $iframe.contents().find('body');
      cy.wrap(iframeBody).as('mainIframe');
    });

    cy.get('@mainIframe').find('#button-find-out-more').click();
    cy.get('@mainIframe').find('.modal-title').should('contain', 'Welcome to webdriveruniversity.com');
    cy.get('@mainIframe').find('button').contains('Close').click();
    cy.get('@mainIframe').find('.modal-title').should('not.be.visible');

  });

  it('Enter and handle Iframe using plugin', () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#iframe').invoke('removeAttr', 'target').click(); // Removes the target attribute from DOM
    
    cy.frameLoaded('#frame');
    cy.iframe().find('#button-find-out-more').click();
    cy.enter().then(getBody => {
      getBody().find('.modal-title').should('contain', 'Welcome to webdriveruniversity.com');
      getBody().find('button').contains('Close').click();
      getBody().find('.modal-title').should('not.be.visible');
    })
    
  });
});