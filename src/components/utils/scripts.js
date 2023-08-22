export const dateFormater = (date) =>{
    const dateObject = new Date(date)
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const day = dateObject.getDate() + 1

    return `${year} – ${month} – ${day}`
}