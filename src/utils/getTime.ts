export const getTime = (time:number):string => {
    const date = new Date(time)

    return `${date.getHours()}:${date.getSeconds()}:${date.getMilliseconds()}`
}