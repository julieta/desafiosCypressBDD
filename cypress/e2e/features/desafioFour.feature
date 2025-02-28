Feature: desafío 4

    Scenario: servicio de productos - GET
        When el usuario ingresa el metodo "GET" y el endpoint "https://simple-grocery-store-api.glitch.me/products"
        Then se valida el id 4641 del producto


    Scenario: servicio de productos -POST
        When el usuario ingresa el metodo "POST" y el endpoint "https://simple-grocery-store-api.glitch.me/carts"
        Then se agrega por servicio un producto al carrito


    Scenario: servicio de productos -PUT
        When el usuario ingresa el metodo "POST" y el endpoint "https://simple-grocery-store-api.glitch.me/carts"
        And se agrega por servicio un producto al carrito
        And se cambia por servicio el producto y se valida respuesta

