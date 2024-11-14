/// <reference types="cypress" />

import getADemoForm from "../PageObject/GetADemoForms/getADemoForm";
import landingPage from "../PageObject/LandingPage/landingPage";
import pageNotFound from "../PageObject/NotFound404/pageNotFound";
import texts from "../Shared/texts";

const { LANDING_PAGE } = texts.home();
const { NOT_FOUND_PAGE } = texts.home();

before(() => {
  cy.visit(LANDING_PAGE.URL_HOME);
});

describe("Access Luma Health website", () => {
  it("Check URL", () => {
    landingPage.checkUrlPage();
  });

  it("Check UI Elements", () => {
    landingPage.checkElements();
  });

  it("Check Size of Footer Lists", () => {
    landingPage.sizeOfFooterLists();
  });

  it("Hover over Platform navigation Bar Item and check list", () => {
    landingPage.hoverPlatformItemTab();
  });

  it("Hover over Who We Serve navigation Bar Item and check list", () => {
    landingPage.hoverWhoWeServeItem();
  });

  it("Hover over Integrations navigation Bar Item and check list", () => {
    landingPage.hoverIntegrationsItem();
  });

  it("Hover over Learn navigation Bar Item and check list", () => {
    landingPage.hoverLearnItem();
  });

  it("Hover over About Us navigation Bar Item and check list", () => {
    landingPage.hoverAboutUsItem();
  });
});

describe("Go to PAGE NOT FOUND 404", () => {
  before(() => {
    cy.visit(NOT_FOUND_PAGE.NOT_FOUND, { failOnStatusCode: false });
  });
  
  it("Check 404 Page not found URL", () => {
    pageNotFound.checkNotFoundPageURL();
  });

  it("Assert Texts and Elements on Page Not Found", () => {
    pageNotFound.checkElementsOnPageNotFound();
  });
});