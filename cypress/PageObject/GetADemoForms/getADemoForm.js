/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";
import locatorsDemoPage from "../../Shared/getADemoLocators";

const { LANDING_PAGE_LOCATORS } = locators.home();
const { LOCATORS_DEMO_PAGE } = locatorsDemoPage.demoFormPage();
const { DEMO_PAGE } = texts.home();

export class GetADemoForm {
    checkDemoPageUrlPage() {
        cy.isClickable(LANDING_PAGE_LOCATORS.GET_DEMO_BTN);
        cy.verifyUrl(DEMO_PAGE.URL_PARTIAL);
    }

    checkElementsOnDemoPage() {
        cy.getIframeBody('/html/body/main/iframe')
            .find(LOCATORS_DEMO_PAGE.FIRST_NAME_INPUT)             
            .type('seu-texto');                           

        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.FIRST_NAME_INPUT, 30000);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.LAST_NAME_INPUT);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.WORK_EMAIL_INPUT);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.PHONE_NUMBER_INPUT);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.COMPANY_NAME_INPUT);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.PROVIDER_RANGE_DD);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.EHR_PM_SYSTEM_DD);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.ORGANIZATION_TYPE_DD);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.INTERESTEDIN_INPUT);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.HEAR_ABOUTUS_INPUT);
        cy.isVisibleByXpath(LOCATORS_DEMO_PAGE.SUBMIT_BTN);
    }

}

const getADemoForm = new GetADemoForm();
export default getADemoForm;