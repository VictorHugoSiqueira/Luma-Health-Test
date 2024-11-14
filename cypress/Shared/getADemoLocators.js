export class LocatorsDemoPage {
    demoFormPage() {
        return {
            LOCATORS_DEMO_PAGE: {
                FIRST_NAME_INPUT: "//input[@name='firstname']",
                LAST_NAME_INPUT: "//input[@name='lastname']",
                WORK_EMAIL_INPUT: "//*[@id='email-1f361297-a9ef-40fd-8c4c-b77e3984adc2_9037']",
                PHONE_NUMBER_INPUT: "//*[@name='phone']",
                COMPANY_NAME_INPUT: "//*[@name='organization_name']",
                PROVIDER_RANGE_DD: "//*[@name='provider_range']",
                PROVIDER_RANGE_OPTION: "//*[@name='provider_range']/option[1]",
                EHR_PM_SYSTEM_DD: "//*[@name='ehr']",
                EHR_PM_SYSTEM_OPTION: "//*[@name='ehr']/option[1]",
                ORGANIZATION_TYPE_DD: "//*[@name='organization_type']",
                ORGANIZATION_TYPE_OPTION: "//*[@name='organization_type']/option[1]",
                INTERESTEDIN_INPUT: "//*[@name='what_are_you_interested_in_']",
                HEAR_ABOUTUS_INPUT: "//*[@name='how_d_you_hear_about_us_']",
                SUBMIT_BTN: "//a[@title='Build your demo']",
            },
        };
    }
}

const locatorsDemoPage = new LocatorsDemoPage();
export default locatorsDemoPage;