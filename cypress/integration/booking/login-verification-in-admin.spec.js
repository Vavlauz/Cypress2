const login = require("../../fixtures/login.json");
const selector = require("../../fixtures/selectors.json");
const testData = require("../../fixtures/testData.json");

describe("When admin is on login page, admin", () => {
  beforeEach(() => {
    cy.visit(testData.adminUrl); // полная ссылка в cypress.json
  });

  it("Should be able to open the login page", () => {
    cy.contains(testData.adminForEqual).should("be.visible"); // получаем текст из элемента на странице входа
  });

  it("Should be able to login with correct email and password", () => {
    // логин с корректными данными
    cy.login(login.login1, login.password1);
    cy.contains(testData.deskForEqual).should("be.visible");
  });

  it("Should be able to login with incorrect email and password", () => {
    // логин с некорректными данными
    cy.login(login.login2, login.password2);
    cy.contains(testData.mistakeForEqual).should("be.visible");
  });

  it("Should not be able to login with empty email", () => {
    // логин с пустым имейлом
    cy.login(login.login3, login.password3);
    cy.get(selector.lineNotFilled)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
