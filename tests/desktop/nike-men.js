describe("1", function() {
  test("Uomo", function(browser) {
    browser
      .url("https://www.nike.com/it/uomo")
      .waitForElementVisible("body", 1000);

    browser.getTitle(function(title) {
      this.assert.equal(
        title,
        "Scarpe, abbigliamento e accessori Nike - Uomo.. Nike.com IT"
      );
    });

    browser.saveScreenshot("./screenshots/nike/uomo.png");

    browser.end();
  });
});
