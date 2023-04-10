describe("template spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000")
    cy.get("[data-test='movieHeader']").contains("React Movie App")
  })
})
