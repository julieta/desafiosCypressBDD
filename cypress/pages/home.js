class Home {
    getMenuBtn() {
        return cy.get('[class^="navbar-toggler"]');
    }

    getMenuContainer() {
        return cy.get('[class^="navbar-nav"]');
    }
}

module.exports = new Home();