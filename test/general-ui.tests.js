var {expect} = require("chai");
var puppeteer = require("puppeteer");

const opts = {
    headless: "new"
};

describe("General ui tests", function () {
    let browser;
    let page;
    let errors = [];
    let sampleSelectorIDs = [
        "ace-builds-cdn",
        "ace-builds-parcel",
        "ace-builds-vitejs",
        "ace-builds-webpack",
        "ace-code-parcel",
        "ace-code-vitejs",
        "ace-code-webpack",
        "react-ace-example"
    ];

    before(async function () {
        browser = await puppeteer.launch(opts);
        page = (await browser.pages())[0];
        page.on("console", function(err) {
            if (err.type() == "error" && err.location().url != "http://localhost:8080/favicon.ico")
                errors.push(err.text());
        }).on('pageerror', ({message}) => errors.push(message));
        await page.goto("http://localhost:8080", {
            waitUntil: 'domcontentloaded',
        });

        shouldNotHaveErrors();
    });

    function shouldNotHaveErrors() {
        try {
            expect(errors.length).to.eql(0);
        } catch (e) {
            errors.length = 0;
            throw e;
        }
    }

    function checkSampleResponse(response) {
        shouldNotHaveErrors();
    }

    async function shouldGoToSamplePage(href) {
        var response = await page.goto("http://localhost:8080/" + href, {
            waitUntil: 'domcontentloaded',
        });

        try {
            checkSampleResponse(response);
            await page.goto("http://localhost:8080", {
                waitUntil: 'domcontentloaded',
            });
        } catch (e) {
            await page.goto("http://localhost:8080", {
                waitUntil: 'domcontentloaded',
            });
            throw e;
        }
    }

    async function shouldOpenClickedLink(hrefSelectorID) {
        const navigationPromise = page.waitForNavigation();

        hrefSelectorID = "#" + hrefSelectorID;
        await page.waitForSelector(hrefSelectorID)
        await page.click(hrefSelectorID);

        var response = await navigationPromise;

        try {
            checkSampleResponse(response);
            await page.goBack({
                waitUntil: 'domcontentloaded',
            });
        } catch (e) {
            await page.goBack({
                waitUntil: 'domcontentloaded',
            });
            throw e;
        }
    }

    sampleSelectorIDs.forEach((selectorID) => {
        it(selectorID, async function () {
            await shouldOpenClickedLink(selectorID);
        })
    })

    after(async function () {
        await browser.close();
    });
});