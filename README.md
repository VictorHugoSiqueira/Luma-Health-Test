<h1> Luma Health </b> </h1>

## <b> ``Introduction`` </b>
This automation covers the following three scenarios on the Luma Health website ( https://www.lumahealth.io/) :
1.  <b> Homepage Validation </b> <br>
    ○ Verify that the homepage loads successfully. <br>
    ○ Check that main elements on the homepage (navigation bar, hero section,
footer) are visible and functional.

2. <b> Navigation Links </b> <br>
    ○ Test that all main navigation links direct the user to the correct pages. <br>
    ○ Ensure that each page loads successfully and displays the expected content. <br>
   
3. <b> 404 Page </b> <br>
    ○ Verify that navigating to a non-existent page (e.g., <br>
    https://lumahealth.io/nonexistentpage) returns a 404 error.
    ○ Check that the 404 error page displays correctly with the expected messaging. <br>
   
4. <b> CI/CD Integration </b> <br>
    ○ CI pipeline using GitHub Actions. <br>
    ○.Cypress tests on every pull request or push to the main branch. <br>
    ○ pipeline can generate and store test reports. <br>

## As you can see, just below we have only 1 test failing in the pipeline

the problem I faced when filling out the form that appears when clicking on Get Demo button on the Landing page

Unlike other tools, Cypress cannot interact with cross-origin iframes due to security restrictions. This problem is common when the iframe is hosted on an external domain and, for security reasons, does not allow a website from a different domain to interact with it.

A common solution is to simulate the content of the iframe in a local environment, if you have access to the content it loads. This way, you can remove the dependency on the external domain and avoid the cross-origin problem.

We could also just check the sending of data (for example, when filling out a form inside the iframe), you can interact directly with the API or the endpoint responsible for processing the data, instead of simulating the complete interaction with the iframe.

Or use another tool for Cross-Origin Iframe Automation
![image](https://github.com/user-attachments/assets/63306fb4-f4c9-4a81-8399-cc3b808b5ca1)

   
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
