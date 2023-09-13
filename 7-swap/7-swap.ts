const obj: Record<string, number> = {
    a: 1,
    b: 2
}

function swapKeysAndValues<T>(data: T): Record<number, string> {
    let result = {}

    const arrKeys: Array<string> = []
    for (let key in data) {
        arrKeys.push(key)
    }

    const arrValues: Array<number> = []
    for (let key in data) {
        arrValues.push(Number(data[key]))
    }

    for (let i = 0; i < arrKeys.length; i++) {
        result[arrValues[i]] = arrKeys[i]
    }

    return result
}

console.log('Before: ',obj);
console.log('After: ', swapKeysAndValues(obj));
