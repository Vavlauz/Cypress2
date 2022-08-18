const login = require("../../fixtures/login.json");
const selector = require("../../fixtures/selectors.json");
const testData = require("../../fixtures/testData.json");

describe("Should login admin page", () => {
  beforeEach(() => {
    cy.visit(testData.adminUrl);
  });

  it("Should be able to open the login page", () => {
    cy.contains(testData.adminForEqual).should("be.visible");
  });

  it("Should be able to login with correct email and password", () => {
    // логин с корректными данными
    cy.login(login.login1, login.password1);
    cy.contains(testData.deskForEqual).should("be.visible");
  });

  it("Should find a hall that sells tickets", () => {
    cy.login(login.login1, login.password1);
    cy.contains(testData.deskForEqual).should("be.visible");
    cy.get(selector.hallOpening).contains(testData.nameHall);
  });
});

describe("Should book a seat in the hall", () => {
  beforeEach(() => {
    cy.visit(testData.clientUrl);
  });

  it("Should choose a date", () => {
    cy.get(selector.chooseTimeSession).click();
  });

  it("Should choose a time", () => {
    cy.get(selector.chooseTimeSession).click();
    cy.get(selector.chooseFilm).contains(testData.timeSession).click();
    cy.contains(testData.timeSessionForEqual).should("be.visible");
  });

  it("Should choose аnd book a seat", () => {
    cy.get(selector.chooseTimeSession).click();
    cy.get(selector.chooseFilm).contains(testData.timeSession).click();
    cy.get(selector.chooseChair).click();
    cy.get(selector.pushButton).click({ multiple: true, force: true });
    cy.url().should("include", testData.paymentPage);
    cy.get(selector.pushButton).click({ force: true });
    cy.contains(testData.takeTicket).should("be.visible");
  });
});
