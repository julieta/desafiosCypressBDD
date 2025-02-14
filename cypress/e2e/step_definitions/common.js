import { Given } from "@badeball/cypress-cucumber-preprocessor";


Given(`que un usuario ingresa a la página {string}`, (url) => {
  cy.visit(url);
});

Given(`el tamaño de la pantalla es {string} y su orientación {string}`, (screenSize, orientacion) => {
  cy.viewport(screenSize, orientacion);
});
