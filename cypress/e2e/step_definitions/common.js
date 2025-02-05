import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario ingresa a la página {string}`, (url) => {
  cy.visit(url);
});
