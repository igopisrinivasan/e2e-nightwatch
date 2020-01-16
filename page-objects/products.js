var productsCommands = {
  viewFirstProduct: function() {
    return this.waitForElementVisible("@viewProductButton").click(
      "@viewProductButton"
    );
  }
};

module.exports = {
  commands: [productsCommands],
  elements: {
    viewProductButton: {
      selector: "a.productQB__title"
    }
  }
};
