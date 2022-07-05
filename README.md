## Install dependencies

- Run `npm install` for a installing all dependencies.

## Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Unit Testing

- Run `ng test` to see the results of all test cases

## Approach

- All products etc are placed in product-service.service with an assumption that it acts as database and instead of using httpclient we directly assign values or pass them to components.
- As data is stoed in product-service.service, refreshing page will make you loose all changes

# Home page
- the home page shows list of all products. If the quantity of product is zero the Add to cart button is disabled

# Shopping cart
- the shopping cart shows the list of products added and there quantities and sub prices as well as total price
- Only one voucher can be applied at a time and once it is used user wont be able to use it again.

# Product Details
- a component to show details for product

# Contact us
- dummy page

# Check out
- Empties the cart once customer buys products
