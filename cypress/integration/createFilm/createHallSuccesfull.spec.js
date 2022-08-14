const selector = require("../../fixtures/selectors.json");
const seats = require("../../fixtures/seats.json");
const prices = require("../../fixtures/prices.json");
const testData = require("../../fixtures/testData.json");

it("Should create new hall", () => {
  cy.visit(testData.adminUrl);
  cy.login();
  cy.createHall();

  cy.get(selector.newHallCheck).click({ multiple: true });
  seats.forEach((seat) => {
    cy.get(selector.rows).clear().type(seat.rows);
    cy.get(selector.places).clear().type(seat.seats);
  });
  cy.get(selector.hallConfConfirmButton).click();
  prices.forEach((price) => {
    cy.get(selector.priceStd).clear().type(price.standart);
    cy.get(selector.priceVip).clear().type(price.vip);
  });
  cy.get(selector.priceConfConfirmButton).click();
  cy.contains(testData.newHallallName).should("be.visible");
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  cy.deleteHall();
});
