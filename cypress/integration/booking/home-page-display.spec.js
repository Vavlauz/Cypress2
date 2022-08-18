const login = require("../../fixtures/login.json");
const selector = require("../../fixtures/selectors.json");
const seats = require("../../fixtures/seats.json");
const prices = require("../../fixtures/prices.json");
const testData = require("../../fixtures/testData.json");

describe("Should show correct display of the home page", () => {
  beforeEach(() => {
    cy.visit(testData.clientUrl); // полная ссылка в cypress.json
  });

  it("Should be able to open the main page", () => {
    // проверка отображения страницы
    cy.contains(testData.logoHeader); // получаем текст из элемента
  });

  it("Should show correct number of days", () => {
    cy.get(selector.week).should("have.length", 7); // проверка что таких селекторов 7 шт (7 дней в неделе)
  });

  it("Should show correct number of films", () => {
    cy.get(selector.chooseFilm).should("have.length", 3); // проверка что таких селекторов 3 шт (3 фильма в приложении)
  });
});
