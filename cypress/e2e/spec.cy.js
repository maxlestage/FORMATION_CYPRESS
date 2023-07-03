describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.log("log ici");
    // cy.get(
    //   ":nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)"
    // ).click();
    console.log("coucou");
  });
});
