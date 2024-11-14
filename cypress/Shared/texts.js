export class Texts {
    home() {
        return {
            LANDING_PAGE: {
                URL_HOME: "https://www.lumahealth.io/",
                URL_PARCIAL: "lumahealth.io",
            },
            DEMO_PAGE: {
                URL_PARTIAL: "https://www.lumahealth.io/book-a-demo/",
            },
            NOT_FOUND_PAGE: {
                NOT_FOUND: "https://www.lumahealth.io/nonexistentpage",
                PAGE_NOT_FOUND_TEXT: "Page Not Found",
                PAGE_NOT_FOUND_SUB_TEXT: "The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.",
            }
        };
    }
}
const texts = new Texts();
export default texts;