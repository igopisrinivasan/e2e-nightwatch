var cartCommands = {
  addToCart: function() {
    return this.waitForElementVisible("@addToCartButton")
      .click("@addToCartButton")
      .pause(1000);
  },
  openCart: function() {
    return this.click("@openCartButton");
  },
  waitForAddToCartAvailable: function() {
    return this.waitForElementVisible("@addToCartButton");
  }
};

module.exports = {
  commands: [cartCommands],
  elements: {
    addToCartButton: {
      selector: ".addToCartWrapper .button-cta"
    },
    openCartButton: {
      selector: "a[data-open=shopping-bag-popup]"
    },
    cartItem: {
      selector: ".cart-item"
    },
    cartItemQuantity: {
      selector: ".right-infos__block:last-child .right-infos__block__value"
    }
  }
};
