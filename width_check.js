// Автотест проверка ширины контентной части.

import puppeteer from 'puppeteer';
import * as chai from 'chai';
const expect = chai.expect;


(async () => {
  // Запуск браузера
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Переход на страницу
  await page.goto('https://csssr.github.io/qa-engineer/');
  
  // Получение значения ширины элемента
  const width = await page.evaluate(() => {
    const element = document.querySelector('div.wrap');
    return window.getComputedStyle(element).width;
  });

	// Проверка ширины через chai expect
  try {
	//  console.log(width);
    chai.expect(width).to.equal('1000px');
    console.log('Test passed: width is ' + width);
  } catch (error) {
    console.error(`Test failed: ${error.message}`);
  }

  
  // Закрытие браузера
  await browser.close();
})();
