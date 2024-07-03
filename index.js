const puppeteer = require('puppeteer');

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
  
  // Проверка ширины элемента
  if (width === '1000px') {
    console.log('Test passed: width is 1000px');
  } else {
    console.log(`Test failed: width is ${width}`);
  }
  
  // Закрытие браузера
  await browser.close();
})();