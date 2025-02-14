Feature: Desafio 2
    @focus
    Scenario: Validar la pagina en mobile - Existencia del menú
        Given que un usuario ingresa a la página "https://www.darwoft.com/"
        And el tamaño de la pantalla es "samsung-s10" y su orientación "portrait"
        When selecciona el menú
        Then se visualiza el menú desplagado

    Scenario: Configuración para no abrir una página nueva - Realizar búsqueda
        Given que un usuario ingresa a la página "https://www.darwoft.com/"
        And el tamaño de la pantalla es "samsung-s10" y su orientación "portrait"
        When selecciona el menú
        And selecciona la opción "Careers" del menú
        When ingresa la palabra "Mobile" en el input del buscador
        And selecciona el botón "Buscar"
        Then se valida resultados del buscador de la palaabra "Mobile"

    Scenario: Orientación Mobile
        Given que un usuario ingresa a la página "https://www.darwoft.com/"
        And el tamaño de la pantalla es "samsung-s10" y su orientación "landscape"
        When selecciona el menú
        And selecciona la opción "Blog" del menú
        Then se valida título, imágenes, links, fechas y botones