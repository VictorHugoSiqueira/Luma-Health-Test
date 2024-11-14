/// <reference types="cypress" />

import notFoundPageLocators from "../../Shared/notFoundPageLocators";
import texts from "../../Shared/texts";

const { NOT_FOUND_PAGE } = texts.home();
const { NOT_FOUND_PAGE_LOCATORS } = notFoundPageLocators.notFoundLocators();


export class PageNotFound {
    checkNotFoundPageURL() {
        cy.verifyUrl(NOT_FOUND_PAGE.NOT_FOUND);
    }

    checkElementsOnPageNotFound() {
        cy.compareText(NOT_FOUND_PAGE_LOCATORS.PAGE_NOT_FOUND_TEXT, NOT_FOUND_PAGE.PAGE_NOT_FOUND_TEXT);
        cy.compareText(NOT_FOUND_PAGE_LOCATORS.INTRO_TEXT, NOT_FOUND_PAGE.PAGE_NOT_FOUND_SUB_TEXT);
    }

}

const pageNotFound = new PageNotFound();
export default pageNotFound;