import { TUser, TProduct, TPurchase, ProductCategories } from './types';

export const users: TUser[] = [
    {
        id:"01",
        email:"fulano@gmail.com",
        password:"bananinha"    
    },
    {
        id:"02",
        email:"beltrano@gmail.com",
        password:"moranguinho"
    }
]

export function createUser(id: string, email: string, password: string) : void {
    console.log(users)
    const newUser: TUser = {
        id: id,
        email: email,
        password: password
    }
    users.push(newUser)
    console.log(users)
    console.log("Cadastro realizado com sucesso")
}

export function getAllUsers() : TUser[] {
    return users
}

export const products: TProduct[] = [
    {
        id:"01",
        name:"Produto 01",
        price:10,
        category:ProductCategories.ACCESSORIES
    },
    {
        id:"02",
        name:"Produto 02",
        price:20,
        category:ProductCategories.CLOTHES_AND_SHOES
    }
]

export function createProduct(id: string, name: string, price: number, category: ProductCategories) : void {
    const newProduct: TProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    console.log("Produto criado com sucesso")
}

export function getAllProducts() : TProduct[] {
    return products
}

export function getProductById(idToSearch: string) : TProduct[] | undefined {
   return(products.filter((product) => {
        return(product.id === idToSearch)
    }))
}

export function queryProductsByName(q: string) : TProduct[] | undefined {
    return(products.filter((product) => {
        return(product.name === q)
    }))
}

export const purchases: TPurchase[] = [
    {
        userId: "02",
        productId: "01",
        quantity: 2,
        totalPrice: 20
    },
    {
        userId: "01",
        productId: "02",
        quantity: 1,
        totalPrice: 20
    }
]

export function createPurchase(userId : string, productId : string, quantity : number, totalPrice : number) : void {
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }
    purchases.push(newPurchase)
    console.log("Compra realizada com sucesso")
}

export function getAllPurchasesFromUserId(userIdToSearch: string) : TPurchase[] | undefined {
    return(purchases.filter((purchase) => {
        return(purchase.userId === userIdToSearch)
    }))
}