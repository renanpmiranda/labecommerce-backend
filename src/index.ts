import { users, products, purchases, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from './database';
import { createUser, getAllUsers, createProduct, getAllProducts, getProductById } from './database';
import { ProductCategories } from './types';

console.log(getAllPurchasesFromUserId("01"))