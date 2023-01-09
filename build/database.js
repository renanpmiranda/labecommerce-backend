"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.purchases = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.products = exports.getAllUsers = exports.createUser = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    {
        id: "00",
        email: "fulano@gmail.com",
        password: "bananinha"
    },
    {
        id: "01",
        email: "beltrano@gmail.com",
        password: "moranguinho"
    }
];
function createUser(id, email, password) {
    console.log(exports.users);
    const newUser = {
        id: id,
        email: email,
        password: password
    };
    exports.users.push(newUser);
    console.log(exports.users);
    console.log("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
exports.products = [
    {
        id: "00",
        name: "Produto 01",
        price: 10,
        category: types_1.ProductCategories.ACCESSORIES
    },
    {
        id: "01",
        name: "Produto 02",
        price: 20,
        category: types_1.ProductCategories.CLOTHES_AND_SHOES
    }
];
function createProduct(id, name, price, category) {
    const newProduct = {
        id: id,
        name: name,
        price: price,
        category: category
    };
    exports.products.push(newProduct);
    console.log("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    return (exports.products.filter((product) => {
        return (product.id === idToSearch);
    }));
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return (exports.products.filter((product) => {
        return (product.name === q);
    }));
}
exports.queryProductsByName = queryProductsByName;
exports.purchases = [
    {
        userId: "00",
        productId: "00",
        quantity: 2,
        totalPrice: 20
    },
    {
        userId: "01",
        productId: "01",
        quantity: 1,
        totalPrice: 20
    }
];
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = {
        userId: userId,
        productId,
        quantity: quantity,
        totalPrice: totalPrice
    };
    exports.purchases.push(newPurchase);
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return (exports.purchases.filter((purchase) => {
        return (purchase.userId === userIdToSearch);
    }));
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map