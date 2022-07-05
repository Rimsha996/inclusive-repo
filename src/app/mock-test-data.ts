import { Product, Category } from "./dataTypes"

export const CATEGORY: Category[] = [
    { id: 0, name: 'Womens hiking' },
    { id: 1, name: 'Mens hiking' },
    { id: 2, name: 'Womens running' },
    { id: 3, name: 'Mens running' },
    { id: 4, name: 'Womens cycling' },
    { id: 5, name: 'Mens cycling' },
  ]
export const PRODUCTS: Product[] = [
    { id: 0, product_name: 'Fleece', color: 'Red', category: CATEGORY['0'], price: 32.00, quantity: 4 },
    { id: 1, product_name: 'Boots', color: 'Brown', category: CATEGORY['0'], price: 99.00, quantity: 10 },
    { id: 2, product_name: 'Fleece', color: 'Green', category: CATEGORY['1'], price: 34.00, quantity: 6 },
    { id: 3, product_name: 'Boots', color: 'Black', category: CATEGORY['1'], price: 99.00, quantity: 9 },
    { id: 4, product_name: 'Vest', color: 'Yellow', category: CATEGORY['2'], price: 26.0, quantity: 4 },
    { id: 5, product_name: 'Jacket', color: 'Black', category: CATEGORY['2'], price: 75.00, quantity: 2 },
    { id: 6, product_name: 'T-shirt', color: 'Yellow', category: CATEGORY['3'], price: 19.99, quantity: 4 },
    { id: 7, product_name: 'Jacket', color: 'Grey', category: CATEGORY['3'], price: 86.00, quantity: 0 },
    { id: 8, product_name: 'Jacket', color: 'Orange', category: CATEGORY['4'], price: 24.50, quantity: 4 },
    { id: 9, product_name: 'Bib-tights', color: 'Grey', category: CATEGORY['4'], price: 40.00, quantity: 9 },
    { id: 10, product_name: 'Bib-shorts', color: 'Black', category: CATEGORY['4'], price: 30.00, quantity: 2 },
    { id: 11, product_name: 'Jacket', color: 'Green', category: CATEGORY['5'], price: 55.00, quantity: 1 },
    { id: 12, product_name: 'Bib-tights', color: 'Black', category: CATEGORY['5'], price: 65.00, quantity: 5 },
  ];

export const CART: Product[] = [
    { id: 0, product_name: 'Fleece', color: 'Red', category: {id:0,name: 'abc'}, price: 32.00, quantity: 1 }
]