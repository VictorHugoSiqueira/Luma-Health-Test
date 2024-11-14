export class Locators {
    home() {
        return {
            LANDING_PAGE_LOCATORS: {
                NAV_BAR: "#navbar",
                LOGIN_BTN: "#header_login",
                GET_DEMO_BTN: "//a[@id='header_login']/following-sibling::a",
                NAV_BAR_LOGO: "//a[@class='navbar-logo']",
                PLATFORM_BTN: "//ul[@class='main-menu-v2']/li[1]/a[1]",
                WHO_WE_SERVE_BTN: "//ul[@class='main-menu-v2']/li[2]/a[1]",
                INTEGRATIONS_BTN: "//ul[@class='main-menu-v2']/li[3]/a[1]",
                LEARN_BTN: "//ul[@class='main-menu-v2']/li[4]/a[1]",
                ABOUT_US_BTN: "//ul[@class='main-menu-v2']/li[5]/a[1]",
                HERO_SECTION_TITLE: "//h1[@class='hero-section-title']",
                BUILD_YOUR_DEMO_BTN: "//a[@title='Build your demo']",
                SEE_WHAT_IT_DOES_BTN: "//a[@title='See what it does']",
                FOOTER: "//ul[@class='f-sub-menu']",
                TERMS_OF_USE: "//ul[@class='f-sub-menu']/li[1]",
                PRIVACY_POLICY: "//ul[@class='f-sub-menu']/li[2]",
                SYSTEM_STATUS: "//ul[@class='f-sub-menu']/li[3]",
                SECURITY_AND_TRUST: "//ul[@class='f-sub-menu']/li[4]",
                FOOTER_MENU_FIRST_COLUMN: "//ul[@class='f-menu first']",
                FOOTER_MENU_SECOND_COLUMN: "//ul[@class='f-menu second']",
                FOOTER_MENU_THIRD_COLUMN: "//ul[@class='f-menu third']",
            },
            PLATFORM_TAB: {
                PLATFORM_ITEM: "(//li[@class='mobile-accordion'])[1]",
                ACCESS_RETENTION: "(//li[@class='mobile-accordion'])[1]/ul/div[1]/div[1]/li[1]/a",
                REFERRALS: "(//li[@class='mobile-accordion'])[1]/ul/div[1]/div[1]/li[2]/a",
                SCHEDULING: "(//li[@class='mobile-accordion'])[1]/ul/div[1]/div[1]/li[3]/a",
                WAITLIST: "(//li[@class='mobile-accordion'])[1]/ul/div[1]/div[1]/li[4]/a",
            },
            WHO_WE_SERVE_TAB: {
                WHO_WE_SERVE_ITEM: "(//li[@class='mobile-accordion'])[2]",
                WHO_WE_SERVE: "(//li[@class='mobile-accordion'])[2]/ul/div[1]/div[1]/li[1]/a",
                ENTERPRISE_HEALTH_SYSTEMS: "(//li[@class='mobile-accordion'])[2]/ul/div[1]/div[1]/li[2]/a",
                SPECIALTY_GROUPS: "(//li[@class='mobile-accordion'])[2]/ul/div[1]/div[1]/li[3]/a",
                REGIONAL_RURAL_CARE: "(//li[@class='mobile-accordion'])[2]/ul/div[1]/div[1]/li[4]/a",
            },
            INTEGRATIONS_TAB: {
                INTEGRATIONS_ITEM: "(//li[@class='mobile-accordion'])[3]",
                MEDITECH: "(//li[@class='mobile-accordion'])[3]/ul/div[1]/div[1]/li[1]/a",
                ORACLE_HEALTH: "(//li[@class='mobile-accordion'])[3]/ul/div[1]/div[1]/li[2]/a",
                EPIC: "(//li[@class='mobile-accordion'])[3]/ul/div[1]/div[1]/li[3]/a",
                NEXT_GEN: "(//li[@class='mobile-accordion'])[3]/ul/div[1]/div[1]/li[4]/a",
            },
            LEARN_TAB: {
                LEARN_ITEM: "(//li[@class='mobile-accordion'])[4]",
                CUSTOMER_STORIES: "(//li[@class='mobile-accordion'])[4]/ul/div[1]/div[1]/li[1]/a",
                RESOURCES: "(//li[@class='mobile-accordion'])[4]/ul/div[1]/div[1]/li[2]/a",
                VIDEOS: "(//li[@class='mobile-accordion'])[4]/ul/div[1]/div[2]/li[1]",
                BLOG: "(//li[@class='mobile-accordion'])[4]/ul/div[1]/div[2]/li[2]",
            },
            ABOUT_US_TAB: {
                ABOUT_US_ITEM: "(//li[@class='mobile-accordion'])[5]",
                ABOUT_US: "(//li[@class='mobile-accordion'])[5]/ul/li[1]/a",
                LUMANATE: "(//li[@class='mobile-accordion'])[5]/ul/li[2]/a",
                NEWSROOM: "(//li[@class='mobile-accordion'])[5]/ul/li[3]/a",
                CAREERS: "(//li[@class='mobile-accordion'])[5]/ul/li[4]/a",
            }
        };
    }
}

const locators = new Locators();
export default locators;