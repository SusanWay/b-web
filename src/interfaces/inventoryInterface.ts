import Item from "./itemInterface.ts"
export default interface Inventory {
    "id": number,
    "idAccount": number,
    "items": Item[]
}