import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`el usuario ingresa el metodo {string} y el endpoint {string}`, (metodo, endpoint) => {
    cy.request({
        url: endpoint,
        method: metodo,
    }).then((response) => {
        const file = `cypress/fixtures/servicios/servicio.json`;
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

Then(`se agrega por servicio un producto al carrito`, () => {
    cy.readFile(`cypress/fixtures/servicios/servicio.json`).then((productData) => {
        cy.request({
            method: "POST",
            url: `https://simple-grocery-store-api.glitch.me/carts/${productData.cartId}/items`,
            body: { productId: 4643 }
        }).then((response) => {
            const file = `cypress/fixtures/servicios/servicio_agregarProducto.json`;
            cy.writeFile(file, response.body);
        })
    });
});


When(`se cambia por servicio el producto y se valida respuesta`, () => {
    cy.readFile(`cypress/fixtures/servicios/servicio.json`).then((productDataCardId) => {
        cy.log(productDataCardId.cartId);
        cy.readFile(`cypress/fixtures/servicios/servicio_agregarProducto.json`).then((productDataItemid) => {
            cy.log(productDataItemid.itemId);
            cy.request({
                method: "PUT",
                url: `https://simple-grocery-store-api.glitch.me/carts/${productDataCardId.cartId}/items/${productDataItemid.itemId}`,
                body: { productId: 4646 }
            }).then((response) => {
                expect(response.status).to.eq(204);
            });
        });


        cy.request({
            method: "GET",
            url: `https://simple-grocery-store-api.glitch.me/carts/${productDataCardId.cartId}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });

        cy.request({
            method: "GET",
            url: `https://simple-grocery-store-api.glitch.me/carts/${productDataCardId.cartId}/items`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    });
});

When(`el metodo {string} y endpoint {string}`, (metodo, endpoint, dataTable) => {
    const bodyData = JSON.parse(dataTable.rawTable.map(row => row[1]).join(""));
    cy.log("bodyData", bodyData)
    cy.request({
        method: metodo,
        url: endpoint,
        body: bodyData
    }).then(response => {
        expect(response.status).to.eq(201);
        cy.writeFile('cypress/fixtures/cliente/cliente.json', response.body);
    });
})

When(`se crea por servicio {string} un pedido para el cliente {string}`, (endpoint, nombre) => {
    cy.readFile(`cypress/fixtures/cliente/cliente.json`).then((token) => {
        const token = token.accessToken
        cy.log("token", token);
        cy.readFile(`cypress/fixtures/servicios/servicio.json`).then((cartData) => {
            const cartId = cartData.cartId
            cy.log("cartId", cartId);

            cy.request({
                method: "POST",
                url: endpoint,
                body: {
                    "cartId": cartId,
                    "customerName": nombre
                },
                headers: { "Authorization": token }
            }).then((response) => {
                expect(response.status).to.eq(201);
                cy.writeFile('cypress/fixtures/orders/orders.json', response.body);
            });
        });
    });
});


