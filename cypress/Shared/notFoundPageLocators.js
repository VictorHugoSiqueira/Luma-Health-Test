export class NotFoundPageLocators {
    notFoundLocators() {
        return {
            NOT_FOUND_PAGE_LOCATORS: {
                PAGE_NOT_FOUND_TEXT: "//h1[@class='entry-title']",
                INTRO_TEXT: "//DIV[@class='intro-text']"
            },
        };
    }
}

const notFoundPageLocators = new NotFoundPageLocators();
export default notFoundPageLocators;