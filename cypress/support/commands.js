
Cypress.Commands.add("login", (loginName, password) => {
  cy.visit("https://automationteststore.com/index.php?rt=account/login");
  cy.get("#loginFrm_loginname").clear().type(loginName);
  cy.get("#loginFrm_password").clear().type(password);
  cy.get("button[title='Login']").click();
  cy.url().should("include", "account/account");
});

Cypress.Commands.add("logout", () => {
  cy.visit("/index.php?rt=account/logout");
});