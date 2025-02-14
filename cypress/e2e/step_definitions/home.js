import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home from "../../pages/home";


When(`selecciona el menú`, () => {
    home.getMenuBtn().click();
});

Then(`se visualiza el menú desplagado`, () => {
    home.getMenuContainer().should("be.visible");
    home.getMenuContainer().contains("Home");
    home.getMenuContainer().contains("Work");
    home.getMenuContainer().contains("Clients");
    home.getMenuContainer().contains("Careers");
    home.getMenuContainer().contains("Blog");
});

When(`selecciona la opción {string} del menú`, (opcion) => {
    home.getMenuContainer().contains(opcion).invoke('removeAttr', 'target').click();
});
