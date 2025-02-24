import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`el usuario ingresa el endpoint {string} y el método {string}`, (endpoint, metodo) => {
    cy.request({
        url: endpoint,
        method: metodo,
        failOnStatusCode: false
    }).as('response');
})

Then(`se valida que la respuesta es {int}`, (statusCode) => {
    cy.get('@response').its('status').should('eq', statusCode);
})


Then(`se valida que el body no este vacio`, () => {
    cy.get('@response').its('body').should('not.be.empty');
})


Then('se imprime nombre y número del pokémon', () => {
    cy.get('@response').its('body').then((responseBody) => {
        const pokemonName = responseBody.name;
        const pokemonNumber = responseBody.id;

        cy.log(`Nombre Pokémon: ${pokemonName}`);
        cy.log(`Número Pokémon: ${pokemonNumber}`);
    });
});


