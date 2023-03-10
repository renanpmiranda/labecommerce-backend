export type TUser = {
    id: string,
    email: string,
    password:string
}

export enum ProductCategories {
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos"
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    category: ProductCategories
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}