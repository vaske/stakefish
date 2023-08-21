describe("Cryptocurrency Exchange Directory", () => {
  it("should visits the main page and clicks on the first exchange and been redirected to exchange details", () => {
    cy.visit("/");

    cy.get("li").first().click();

    cy.url().should("include", "/exchanges/");

    cy.get("button").click();

    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
