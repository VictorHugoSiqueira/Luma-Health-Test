/// <reference types="cypress" />

import landingPage from "../PageObject/LandingPage/landingPage";
import texts from "../Shared/texts";
// import vehiclePage from "../Page Object/Vehicle Data/vehicleData";
// import insurantPage from "../Page Object/Insurant Data/insurantData";
// import productData from "../Page Object/Product Data/productData";
// import priceOption from "../Page Object/Price Option/priceOption";
// import sendQuote from "../Page Object/Send Quote/sendQuote";

const { LANDING_PAGE } = texts.home();

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://www.lumahealth.io/')
//   })
// })


describe("Access Luma Health website", () => {
  before(() => {
    cy.visit(LANDING_PAGE.URL_HOME);
  });

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