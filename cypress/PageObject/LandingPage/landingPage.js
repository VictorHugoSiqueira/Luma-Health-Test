/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { LANDING_PAGE_LOCATORS } = locators.home();
const { PLATFORM_TAB } = locators.home();
const { WHO_WE_SERVE_TAB } = locators.home();
const { INTEGRATIONS_TAB } = locators.home();
const { LEARN_TAB } = locators.home();
const { ABOUT_US_TAB } = locators.home();
const { LANDING_PAGE } = texts.home();

export class LandingPage {
    checkUrlPage() {
        cy.verifyUrl(LANDING_PAGE.URL_PARCIAL);
    }

    checkElements() {
        cy.isVisible(LANDING_PAGE_LOCATORS.NAV_BAR);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.GET_DEMO_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.NAV_BAR_LOGO);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.PLATFORM_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.WHO_WE_SERVE_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.INTEGRATIONS_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.LEARN_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.ABOUT_US_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.HERO_SECTION_TITLE);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.BUILD_YOUR_DEMO_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.SEE_WHAT_IT_DOES_BTN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.FOOTER);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.TERMS_OF_USE);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.PRIVACY_POLICY);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.SYSTEM_STATUS);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.SECURITY_AND_TRUST);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.FOOTER_MENU_FIRST_COLUMN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.FOOTER_MENU_SECOND_COLUMN);
        cy.isVisibleByXpath(LANDING_PAGE_LOCATORS.FOOTER_MENU_THIRD_COLUMN);
    }

    sizeOfFooterLists() {
        cy.assertListSize(LANDING_PAGE_LOCATORS.FOOTER_MENU_FIRST_COLUMN, 15)
        cy.assertListSize(LANDING_PAGE_LOCATORS.FOOTER_MENU_SECOND_COLUMN, 15)
        cy.assertListSize(LANDING_PAGE_LOCATORS.FOOTER_MENU_THIRD_COLUMN, 10)
    }

    hoverPlatformItemTab() {
        cy.checkTabItemsAndItemsInside(
            PLATFORM_TAB.PLATFORM_ITEM,
            PLATFORM_TAB.ACCESS_RETENTION,
            PLATFORM_TAB.REFERRALS,
            PLATFORM_TAB.SCHEDULING,
            PLATFORM_TAB.WAITLIST
        );
    }

    hoverWhoWeServeItem() {
        cy.checkTabItemsAndItemsInside(
            WHO_WE_SERVE_TAB.WHO_WE_SERVE_ITEM,
            WHO_WE_SERVE_TAB.WHO_WE_SERVE,
            WHO_WE_SERVE_TAB.ENTERPRISE_HEALTH_SYSTEMS,
            WHO_WE_SERVE_TAB.SPECIALTY_GROUPS,
            WHO_WE_SERVE_TAB.REGIONAL_RURAL_CARE
        );
    }

    hoverIntegrationsItem() {
        cy.checkTabItemsAndItemsInside(
            INTEGRATIONS_TAB.INTEGRATIONS_ITEM,
            INTEGRATIONS_TAB.MEDITECH,
            INTEGRATIONS_TAB.ORACLE_HEALTH,
            INTEGRATIONS_TAB.EPIC,
            INTEGRATIONS_TAB.NEXT_GEN
        );
    }

    hoverLearnItem() {
        cy.checkTabItemsAndItemsInside(
            LEARN_TAB.LEARN_ITEM,
            LEARN_TAB.CUSTOMER_STORIES,
            LEARN_TAB.RESOURCES,
            LEARN_TAB.VIDEOS,
            LEARN_TAB.BLOG
        );
    }

    hoverAboutUsItem() {
        cy.checkTabItemsAndItemsInside(
            ABOUT_US_TAB.ABOUT_US_ITEM,
            ABOUT_US_TAB.ABOUT_US,
            ABOUT_US_TAB.LUMANATE,
            ABOUT_US_TAB.NEWSROOM,
            ABOUT_US_TAB.CAREERS
        );
    }
}

const landingPage = new LandingPage();
export default landingPage;