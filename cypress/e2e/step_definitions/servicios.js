import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`el usuario ingresa el metodo {string} y el endpoint {string}`, (metodo, endpoint) => {
    cy.request({
        url: endpoint,
        method: metodo,
    }).then((response) => {
        const file = `cypress/fixtures/servicios/servicio.json`;
        expect(response.status).to.eq(200);
        cy.writeFile(file, response.body);
    })
})

Then(`se valida el id {int} del producto`, (idProducto) => {
    cy.request("GET", `https://simple-grocery-store-api.glitch.me/products/${idProducto}`).then((response) => {
        const file = response.body.id
        cy.readFile(`cypress/fixtures/servicios/servicio.json`).then((data) => {
            const product = data.find((x) => x.id === file)
            expect(response.body.id).to.be.equal(product.id);
            expect(response.body.category).to.be.equal(product.category);
            expect(response.body.name).to.be.equal(product.name);
            expect(response.body.inStock).to.be.equal(product.inStock);
        });
    })
})

