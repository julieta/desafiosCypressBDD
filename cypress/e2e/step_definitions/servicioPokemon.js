import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

When(`el usuario ingresa el endpoint {string} y el método {string}`, (endpoint, metodo) => {
    cy.request({
        url: endpoint,
        method: metodo
    }).then((res) => {
        response = res
        cy.writeFile(`cypress/fixtures/servicio.json`, response.body);
    })
})


Then(`se valida que la respuesta es {int}`, (status) => {
    cy.wrap(response).should('have.property', 'status', status);
})