const pupeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

it('should output name and age', () => {
  const text = generateText('Nico', 25);
  expect(text).toBe('Nico (25 years old)');
});

it('should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
});

it('should generate a valid text output', () => {
  const text = checkAndGenerate('Nico', 25);
  expect(text).toBe('Nico (25 years old)');
});

it('Should create an element with text and correct class', async () => {
  const browser = await pupeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ['--window-size=1920,1080'],
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///C:/Users/nicorema/Desktop/Web%20UI/React-Trainee/javascript-udemy-course/testing-01-starting-setup/index.html'
  );
  await page.click('input#name');
  await page.type('input#name','Anna')
  await page.click('input#age');
  await page.type('input#age','22')
  await page.click('#btnAddUser');
  const text = await page.$eval('.user-item', el => el.textContent);
  expect(text).toBe('Anna (22 years old)')
});
