import Item from "./itemInterface.ts"

export default interface CartItem extends Item{
    quantity: number
}