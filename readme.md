#Install
npm i

#run tests
to run tests in watch mode
npm start

if you want to change the browser change the broeser name in this script in package.json
"test": "nightwatch -c configs/local/nightwatch.conf.js -e chrome",

#Exercise:

fork the repo and create a branch in your repo called feature/test

- goto https://www.prada.com/it/it.html, test that the page exist and the main tabs are present
- navigate to https://www.prada.com/it/it/women/shoes/sneakers.html
  - select the fist product,
  - select the first available size and add it to the cart
  - select the second available size and add it to the cart
  - check that the products are in the cart
  - check that the sum of the products in the cart is correct
  - click on "procedi al pagamento" the checkout button
  - verify that the url is https://www.prada.com/it/it/checkout-login.html
