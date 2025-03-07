Feature: desafío 4

    Scenario: servicio de productos - GET
        When el usuario ingresa el metodo "GET" y el endpoint "https://simple-grocery-store-api.glitch.me/products"
        Then se valida el id 4641 del producto

    Scenario: Crear carrito - POST
        When el usuario ingresa el metodo "POST" y el endpoint "https://simple-grocery-store-api.glitch.me/carts"
        Then se agrega por servicio un producto al carrito

    Scenario: Cambiar producto del carrito - PUT
        When el usuario ingresa el metodo "POST" y el endpoint "https://simple-grocery-store-api.glitch.me/carts"
        And se agrega por servicio un producto al carrito
        Then se cambia por servicio el producto y se valida respuesta

    Scenario: Cliente - POST
        When el metodo "POST" y endpoint "https://simple-grocery-store-api.glitch.me/api-clients"
            | body | {"clientName": "Julieta",           |
            | body | "clientEmail": "julieta@gmail.com"} |
        And el usuario ingresa el metodo "POST" y el endpoint "https://simple-grocery-store-api.glitch.me/carts"
        And se crea por servicio "https://simple-grocery-store-api.glitch.me/orders" un pedido para el cliente "Julieta"


