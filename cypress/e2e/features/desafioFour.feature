Feature: desafío 4

    Scenario: servicio de productos - GET
        When el usuario ingresa el metodo "GET" y el endpoint "https://simple-grocery-store-api.glitch.me/products"
        Then se valida el id 4641 del producto

