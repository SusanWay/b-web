import Item from "@/interfaces/itemInterface"
export default interface Inventory {
    "id": number,
    "idAccount": number,
    "items": Item[]
}