// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const selector = require("../fixtures/selectors.json");
const testData = require("../fixtures/testData.json");

Cypress.Commands.add("login", (login, password) => {
  cy.get('[for="email"] > .login__input').type(login);
  cy.get('[for="pwd"] > .login__input').type(password);
  cy.get(".login__button").click();
});

Cypress.Commands.add("createHall", () => {
  cy.contains("Создать зал").click();
  cy.get(selector.hallNameField).type(testData.newHallallName);
  cy.get(selector.confHallButton).click();
});

Cypress.Commands.add("deleteHall", () => {
  cy.get('[data-hall-name="MyHall"]').click({
    force: true,
  });
  cy.get("form > .conf-step__buttons > .conf-step__button-accent").click({
    force: true,
  });
});

require("@4tw/cypress-drag-drop");

import "cypress-file-upload";
import "@4tw/cypress-drag-drop";
