<h1> Luma Health </b> </h1>

## <b> ``Introdução`` </b>

This automation covers the following three scenarios on the Luma Health website ( https://www.lumahealth.io/) :
1. Homepage Validation
    ○ Verify that the homepage loads successfully.
    ○ Check that main elements on the homepage (e.g., navigation bar, hero section,
footer) are visible and functional.
2. Navigation Links
    ○ Test that all main navigation links direct the user to the correct pages.
    ○ Ensure that each page loads successfully and displays the expected content.
3. Contact Form (if available)
    ○ Test that the contact form loads correctly.
    ○ Verify required fields (e.g., name, email) and check that validation messages
    appear when fields are left empty.
    ○ Ensure that the form can be successfully submitted with valid inputs.

## <b> ``Executing Automated Tests`` </b>

- Required Apps:
    - Node.js ( https://nodejs.org/en/download/ )
- Download project LumaTest on Github
    - https://github.com/VictorHugoSiqueira/LumaTest
- Go to the Project's Directory LumaTest using CMD

**Steps**
- On CMD Command Prompt type:
    - <i>npm install</i>
- To execute Automated Tests using Cypress, type:
    - <i>npm run open</i>
<br>

**After a few seconds cypress screen will be showed**

- Choose the option: <b>E2E Testing</b>
- Choose browser ( Eletron , Chrome )
- Click Start E2E Testing in Electron

## <b> ``Choosing Tests``</b>

**Two Options will be presented:**
- <b>ui.cy.js: </b> This option will bring happy path validating buttons, texts, inputs.
- <b>testCases.cy.js: </b> This option will bring BDD. Functionalities splited by views and divided by scenarios

</br>
