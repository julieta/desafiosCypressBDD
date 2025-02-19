Feature: Validación de Api

    Scenario: Validar endpoint
        When el usuario ingresa el endpoint "https://pokeapi.co/api/v2/pokemon/pikachu" y el método "GET"
        Then se valida que la respuesta es 200
