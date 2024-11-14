/// <reference types="cypress" />

import assertive from "../Shared/assertive";

require('cypress-xpath');
import "cypress-real-events";

const { ASSERTIVE } = assertive.assertive();

Cypress.Commands.add("compareText", (locator, text, time) => {
  cy.get(locator, { timeout: time }).should(ASSERTIVE.COMPARE_TEXT, text);
});

Cypress.Commands.add("isVisible", (locator) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
});

Cypress.Commands.add("isVisibleByXpath", (locator) => {
  cy.xpath(locator).should(ASSERTIVE.VISIBLE);
});

Cypress.Commands.add("isClickable", (locator) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
  cy.get(locator).click();
});

Cypress.Commands.add("verifyUrl", (text) => {
  cy.url().should(ASSERTIVE.INCLUDE_TEXT, text);
});

Cypress.Commands.add("insertText", (locator, text) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
  cy.get(locator).type(text);
});

Cypress.Commands.add("assertListSize", (locator, size) => {
  cy.xpath(locator).find('li').should('have.length', size)
});

Cypress.Commands.add("checkTabItemsAndItemsInside", (tabLocator, listItem1, listItem2, listItem3, listItem4) => {
  const options = { timeout: 5000 }; // Timeout de 5 segundos

  cy.xpath(tabLocator).realHover();
  cy.wait(5000);
  cy.xpath(listItem1, options).should('be.visible');
  cy.xpath(listItem2, options).should('be.visible');
  cy.xpath(listItem3, options).should('be.visible');
  cy.xpath(listItem4, options).should('be.visible');
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});