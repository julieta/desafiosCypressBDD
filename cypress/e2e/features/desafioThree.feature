Feature: Validación de Api-Pokémon
    Scenario: Validar endpoint con repuesta 200
        When el usuario ingresa el endpoint "https://pokeapi.co/api/v2/pokemon/pikachu" y el método "GET"
        Then se valida que la respuesta es 200

    Scenario: Validar que no exista un pokémon. Código 404
        When el usuario ingresa el endpoint "https://pokeapi.co/api/v2/pokemon/patamon" y el método "GET"
        Then se valida que la respuesta es 404

    Scenario: Validar pokemon inexistente
        When el usuario ingresa el endpoint "https://pokeapi.co/api/v2/pokemon/0" y el método "GET"
        Then se valida que la respuesta es 404

    Scenario: Body no vacio. Nombre y número
        When el usuario ingresa el endpoint "https://pokeapi.co/api/v2/pokemon/starmie" y el método "GET"
        Then se valida que el body no este vacio
        And se imprime nombre y número del pokémon

