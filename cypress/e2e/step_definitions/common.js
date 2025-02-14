import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home from "../../pages/home";
import careers from "../../pages/careers";

Given(`que un usuario ingresa a la página {string}`, (url) => {
  cy.visit(url);
});

Given(`el tamaño de la pantalla es {string} y su orientación {string}`, (screenSize, orientacion) => {
  cy.viewport(screenSize, orientacion);
});

When(`selecciona el menú`, () => {
  home.getMenuBtn().click();
});

Then(`se visualiza el menú desplagado`, () => {
  home.getMenuContainer().should("be.visible");
  home.getMenuContainer().contains("Home");
  home.getMenuContainer().contains("Work");
  home.getMenuContainer().contains("Clients");
  home.getMenuContainer().contains("Careers");
  home.getMenuContainer().contains("Blog");
});

When(`selecciona la opción {string} del menú`, (opcion) => {
  home.getMenuContainer().contains(opcion).invoke('removeAttr', 'target').click();
});

When(`ingresa la palabra {string} en el input del buscador`, (palabra) => {
  careers.getInputBuscador().scrollIntoView().click();
  careers.getInputBuscador().clear().type(palabra);
});

When(`selecciona el botón {string}`, (boton) => {
  careers.getBtnBuscar().contains("Buscar").click();
  cy.wait(2000);
})

Then(`se valida resultados del buscador de la palaabra {string}`, (palabra) => {
  careers.getContainerBuscador().should("be.visible");
  careers.getResultadoBuscador().each(($resultado) => {
    cy.wrap($resultado).should("contain.text", palabra);
  });
});

Then(`se valida imágenes, links, fechas y botones`, () => {

})
