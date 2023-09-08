/*
Необходимо написать функцию toString, которая принимает любой тип
и возвращает его строкоев представление. Если не может, то возвращает undefined
 */

function toString<T>(value: T): string | undefined {

    if (value === null || value === undefined) {
        return undefined;
    }

    if (typeof value === 'string') {
        return value;
    }

    if (typeof value === 'number') {
        return String(value);
    }

    if (Array.isArray(value)) {
        return value.toString();
    }

    if (typeof value === 'object') {
        return JSON.stringify(value);
    }

    return undefined;
}
