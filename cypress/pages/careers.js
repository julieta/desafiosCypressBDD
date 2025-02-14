class Careers {
    getInputBuscador() {
        return cy.get('[class^="search-field"]');
    }
    getBtnBuscar() {
        return cy.get('[class^="btn btn-secondary"]');
    }

    getContainerBuscador() {
        return cy.get('[class^="list-unstyled"]')
    }

    getResultadoBuscador() {
        return cy.get('li[class^="media"]');
    }
}

module.exports = new Careers();