const selector = require("../../fixtures/selectors.json");
const seats = require("../../fixtures/seats.json");
const prices = require("../../fixtures/prices.json");
const testData = require("../../fixtures/testData.json");

it("Should show correct main page", () => {
  cy.visit(testData.clientUrl);
  cy.get(selector.mainTitle).should("be.visible");
});

it("Should show correct admin panel page", () => {
  cy.visit(testData.adminUrl);
  cy.login();
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  cy.contains("Управление").should("be.visible");
});

it("Should show inCorrect page", () => {
  cy.visit(testData.adminUrl);
  cy.invalidLogin();
  cy.contains("Ошибка авторизации!").should("be.visible");
});
