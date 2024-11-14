/// <reference types="cypress" />

import assertive from "../Shared/assertive";

require('cypress-xpath');
import "cypress-real-events";

const { ASSERTIVE } = assertive.assertive();

Cypress.Commands.add("compareText", (locator, text, time = 20000) => {
  cy.xpath(locator, { timeout: time }).should(ASSERTIVE.COMPARE_TEXT, text);
});

Cypress.Commands.add("isVisible", (locator, time = 20000) => {
  cy.xpath(locator, { timeout: time }).should(ASSERTIVE.VISIBLE);
});

Cypress.Commands.add("isVisibleByXpath", (locator, time = 20000) => {
  cy.xpath(locator, { timeout: time }).should(ASSERTIVE.VISIBLE);
});

Cypress.Commands.add("isClickable", (locator) => {
  cy.xpath(locator).should(ASSERTIVE.VISIBLE);
  cy.xpath(locator).click();
});

Cypress.Commands.add("verifyUrl", (text) => {
  cy.url().should(ASSERTIVE.INCLUDE_TEXT, text);
});

Cypress.Commands.add("insertText", (locator, text) => {
  cy.xpath(locator).should(ASSERTIVE.VISIBLE);
  cy.xpath(locator).type(text);
});

Cypress.Commands.add("assertListSize", (locator, size) => {
  cy.xpath(locator).find('li').should('have.length', size)
});

Cypress.Commands.add("checkTabItemsAndItemsInside", (tabLocator, listItem1, listItem2, listItem3, listItem4) => {
  const options = { timeout: 5000 };

  cy.xpath(tabLocator).realHover();
  cy.wait(5000);
  cy.xpath(listItem1, options).should('be.visible');
  cy.xpath(listItem2, options).should('be.visible');
  cy.xpath(listItem3, options).should('be.visible');
  cy.xpath(listItem4, options).should('be.visible');
});

Cypress.Commands.add("generateRandomUsername", () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
});

Cypress.Commands.add("getIframeBody", (iframeSelector) => {
  return cy
    .xpath(iframeSelector)                
    .its("0.contentDocument.body")       
    .should("not.be.empty")             
    .then(cy.wrap);                   
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});