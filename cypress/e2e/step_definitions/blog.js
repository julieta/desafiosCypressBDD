import { Then } from "@badeball/cypress-cucumber-preprocessor";
import blog from "../../pages/blog";

Then(`se valida título, imágenes, links, fechas y botones`, () => {
    blog.getTitulo().should("be.visible");
    blog.getImagen().should("be.visible").and("have.attr", "src");
})
