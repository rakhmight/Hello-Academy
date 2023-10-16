export const getTime = (time:number):string => {
    const date = new Date(time)

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}