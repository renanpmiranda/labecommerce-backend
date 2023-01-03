"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
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
exports.products = [
    {
        id: "00",
        name: "Produto 01",
        price: 10,
        category: "Categoria 1"
    },
    {
        id: "01",
        name: "Produto 02",
        price: 20,
        category: "Categoria 2"
    }
];
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
//# sourceMappingURL=database.js.map