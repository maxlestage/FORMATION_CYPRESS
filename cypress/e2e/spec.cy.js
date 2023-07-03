describe("template spec", { testIsolation: true }, () => {
  it("clear", () => {});
});

describe("template spec", { testIsolation: false }, () => {
  it("Go home", () => {
    cy.visit("/");
  });

  it("choose lang", () => {
    cy.visit("/");
    cy.get(Cypress.env("lang"))
      .click()
      .then(() => {
        Cypress.env("pubs").forEach((pub) => {
          cy.$$(pub).hide();
        });
      });
  });

  it("Take Caare", () => {
    cy.get(Cypress.env("care")).click();
  });

  it("Bake cookie", { scrollBehavior: false }, () => {
    cy.get(Cypress.env("bigCookie")).click();
    cy.get(Cypress.env("nbcookies")).contains(/1 cookie/);
  });

  it("Save Cookie", () => {
    cy.get("body").type("{ctrl}s");
  });

  it("Reload with out clear cache!", () => {
    cy.reload();
    cy.get(Cypress.env("care")).click();
    cy.get(Cypress.env("nbcookies")).contains(/1 cookie/);
  });

  // it("Number of cookies", () => {
  //   cy.get(Cypress.env("nbCookies")).contains(/1 cookie/);
  // });
});
