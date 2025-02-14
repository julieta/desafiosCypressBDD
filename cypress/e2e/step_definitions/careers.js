import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import careers from "../../pages/careers";

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
