const re = new RegExp("^([1-2][0-9]{3})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})-([0-9]{2}):([0-9]{2})$")

export const dateFormatter = (date: string) =>{
    if(re.test(date)) {
        const dateObject = new Date(date)
        const year = dateObject.getFullYear()
        const month = dateObject.getMonth() + 1
        const day = dateObject.getDate()
        return `${year} – ${month} – ${day}`
    }
    else {
        return 'Неверные данные'
    }
}