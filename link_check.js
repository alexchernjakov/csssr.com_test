import puppeteer from 'puppeteer';
import * as chai from 'chai';
const expect = chai.expect;

(async () => {
  // Запуск браузера
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Переход на страницу
  await page.goto('https://csssr.github.io/qa-engineer/');
  
  // Получение значения атрибута href ссылки с указанным селектором
  const linkHref = await page.evaluate(() => {
    const selector = 'body > div.wrap > section.info > div.info-errors > aside > ul > li:nth-child(4) > label > a';
    const element = document.querySelector(selector);
    return element ? element.getAttribute('href') : null;
  });
/*  
  // Проверка значения ссылки
  if (linkHref === 'https://getsharex.com/') {
    console.log('Test passed: link href is correct');
  } else {
    console.log(`Test failed: link href is ${linkHref}`);
  }
*/

	// Проверка ссылки через chai expect
  try {
	//  console.log(width);
    chai.expect(linkHref).to.equal('https://getsharex.com/');
    console.log('Test passed: link href is correct' + linkHref);
  } catch (error) {
    console.error(`Test failed: ${error.message}`);
  }
  
  // Закрытие браузера
  await browser.close();
})();
