Feature: Ejemplo

    Scenario: Ejemplo 0
        #en la pagina de cypress se puede observar distintos tipos de pantallas de ejemplo https://docs.cypress.io/api/commands/viewport
        Given que un usuario ingresa a la página "https://www.darwoft.com/"
        And el tamaño de la pantalla es "samsung-s10"
        When selecciona el menú
        Then se visualiza el menú desplagado