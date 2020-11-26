const { browser, element, by } = require("protractor");
const { protractor } = require("protractor/built/ptor");
const { async } = require("q");
const { compare } = require("semver");

describe("basics command", () => {
  it("test case 1", async () => {
    browser.waitForAngularEnabled(false);
    // await browser.get("http://juliemr.github.io/protractor-demo/");
    await browser.get("https://the-internet.herokuapp.com/windows");
    await browser.manage().window().maximize();
    // let ss = await element.all(by.tagName("a")).map(async (el) => {
    //   return el.getText();
    // });
    // console.log(ss);

    /* dynamic dropdown
    await browser
      .actions()
      .mouseMove(
        element(by.xpath("//*[@role='combobox']")).sendKeys("218 saint cla")
      )
      .perform();
    await browser.actions().sendKeys(protractor.Key.DOWN).perform();
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(5555);
    */

    ////////////////////////////////MULTIPLE WINDOW///////////////////////
    await element(by.linkText("Click Here")).click();
    let windowHandles = await browser.getAllWindowHandles();
    let [parent, child] = windowHandles;
    let parentwindowtitle = await browser.getTitle();
    console.log(await parentwindowtitle);
    browser.switchTo().window(child);
    let childwindowtitle = await browser.getTitle();
    console.log(await `child titile is ${childwindowtitle}`);
    browser.switchTo().window(parent);
    let ss = await browser.getTitle();
    console.log(await ss);
  });
});
