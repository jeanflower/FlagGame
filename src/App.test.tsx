import { getImages } from "./images";

let alreadyRunning = false;
const webdriver = require("selenium-webdriver");

const fs = require('fs');
const fetch = require("node-fetch");

async function scrapeWorldometersData(
  driver: any,
){
  const url = 'https://www.worldometers.info/geography/alphabetical-list-of-countries/';
  await driver.get(url);

  let result = '';

  const x = await driver.findElements(
    webdriver.By.tagName('tr')
  );
  const names = [];
  for(let j = 0; j < x.length; j = j + 1){
    const children = await x[j].findElements(
      webdriver.By.xpath("./child::*"));
    const name = await children[1].getText();
    names.push(name);
  }
  const images = getImages(10);
  for(const im of images){
    const match = names.find((name)=>{
      return name === im.name;
    });
    if(match === undefined){
      result += `worldometer has no match for ${im.name}\n`;
    }
  }
  for(const name of names){
    const match = images.find((im)=>{
      return im.name === name;
    });
    if(match === undefined){
      result += `images has no match for ${name}\n`;
    }
  }
  console.log(result);
}

async function scrapeFlagsNetData(
  driver: any,
){
  let result = "";
  const alpha = 'abcdefgh';
  for(let pageNum = 0; pageNum < alpha.length; pageNum = pageNum + 1){

    console.log(`look on page ${alpha[pageNum]}`);

    await driver.get(`http://www.flags.net/index${alpha[pageNum]}.htm`);
    //console.log(`loaded ${pageNum}th motorhomes page`);

    // find this
    // <a class="js-click-handler listing-fpa-link tracking-standard-link" data-results-nav-fpa="" data-label="search appearance click " href="/motorhome-details/202102159100700?advertising-location=at_motorhomes&amp;postcode=se171ab&amp;sort=price-asc&amp;radius=1500&amp;page=1"></a>
    const x = await driver.findElements(
      webdriver.By.className('indexcolumns')
    );
    // console.log(`got indexcolumns element ${x}`);
    const children = await x[0].findElements(
      webdriver.By.xpath("./child::*"));
    // console.log(`got ${children.length} children`); // 38 things
    const urls = [];
    for(let j = 0; j < children.length; j = j + 1){
      const children2 = await children[j].findElements(
        webdriver.By.xpath("./child::*"));
      // console.log(`got ${children2.length} children2`); // 1 
      const children3 = await children2[0].findElements(
        webdriver.By.xpath("./child::*"));
      // console.log(`got ${children3.length} children3`); // 1 
      const children4 = await children3[0].findElements(
        webdriver.By.xpath("./child::*"));
      // console.log(`got ${children4.length} children4`); // 1 
      const children5 = await children4[0].findElements(
        webdriver.By.xpath("./child::*"));
      // console.log(`got ${children5.length} children5`); // 2 columns

      // console.log(`children5[1] is ${await children5[1].getText()}`);
      if((await children5[1].getText()).includes('UN Member Country')){
        const url = await children[j].getAttribute('href');
        console.log(`url = ${url}`);
        urls.push(url);
      }
    }
    for (let i = 0; i < urls.length; i++){
      await driver.get(urls[i]);
      const title = await driver.findElements(
        webdriver.By.className('maintitle')
      );
      // console.log(`got title ${title}`);
      const titleText = await title[0].getText();
      const flag = await driver.findElements(
        webdriver.By.className('flag')
      );
      const children = await flag[0].findElements(
        webdriver.By.xpath("./child::*"));
      const url = await children[0].getAttribute('src');
      result = result + (`{ name:"${titleText}", url: "${url}" },\n`);
      console.log(result);
    }

    const fs = require('fs');
    fs.writeFile(`./scraped_data/${alpha[pageNum]}Data.txt`, result, function(err: any) {
      if(err) { return console.log(err);}
        console.log("The file was saved!");
      }
    ); 
  }
  // console.log(`about to resolve... adData.length = ${adData.length}`);
  console.log(result);
}


describe('scrape ad data', () => {
  let driverSimple = undefined;
  if (!alreadyRunning) {
    alreadyRunning = true;

    const capabilityName = 'goog:chromeOptions'; // Switch to 'moz:firefoxOptions' if desired
  
    // Set up the commandline options for launching the driver.
    // In this example, I'm using various headless options.
    const browserOptions = {
      args: ['--disable-gpu', '--no-sandbox'],
    };
    //if (headless) {
    //  browserOptions.args.unshift('--headless');
    //}
    // Set up the browser capabilities.
    // Some lines could be condensed into one-liners if that's your preferred style.
    
    let browserCapabilities = webdriver.Capabilities.chrome();
    browserCapabilities = browserCapabilities.set(capabilityName, browserOptions);

    const builder = new webdriver.Builder().forBrowser('chrome');
    // Setting the proxy-server option is needed to info chrome to use proxy
    const chrome = require('selenium-webdriver/chrome');
    let option = new chrome.Options();

    // let proxyAddress = '86.145.14.192:8080';
    // option = option.addArguments(`--proxy-server=${proxyAddress}`);

    driverSimple = builder.withCapabilities(browserCapabilities).setChromeOptions(option).build();
  }
  if (driverSimple == undefined) {
    return;
  }
  const driver = driverSimple;
  jest.setTimeout(100000); // allow time for all these tests to run


  it('scrape data', () => {
    return new Promise<void>(async (resolve, reject) => {

      //await scrapeFlagsNetData( driver );
      await scrapeWorldometersData( driver );

      resolve();
    });  
  });

  afterAll(async () => {
    await driver.quit();
  });
});
