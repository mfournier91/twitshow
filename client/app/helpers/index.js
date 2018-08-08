export function arrayToObject(arr) {
    return arr.reduce((acc, val) => ({...acc, [val._id]: val}), {})
}