class Blog {
    getTitulo() {
        return cy.get('[class^="color-blue inside-title"]')
    }
    getImagen() {
        return cy.get('[class^="article-picture"]')
    }

}

module.exports = new Blog();