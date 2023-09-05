import Item from "../../interfaces/itemInterface.ts";
export const sortItemsByType = (itemsArr: Item[], selectedType: string) => {
    const sortedItems = [] as Item[]
    for (const item of itemsArr) {
        if (selectedType === item.type || selectedType === 'ALL') {
            sortedItems.push(item)
        }
    }
    return sortedItems
}
