// Встроенные дженерики
import {get} from "axios";

const num: Array<number> = [1,2, 3]

async function test() {
    const a = await new Promise<number>((resolve, reject) => {
        resolve(1)
    })
}

// record - словарь ключ + значение с 2 дженериками.
const check: Record<string, boolean> = {
    drive: true,
    kpp: false
}

// функции с generic. С помощью них, мы можем делать универсальные функции с точки зрения типов

function logMiddleware<T>(data: T): T {
    console.log(data);
    return data
}

const res = logMiddleware<number>(10)

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2
    return data.splice(0, l)
}

getSplitedHalf<number>([1, 4, 5, 3])

// использование дженериков в типах
const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;

interface ILogLine<T> {
    timeStamp: Date;
    data: T
}

type LogLineType<T> = {
    timeStamp: Date;
    data: T
}
// LogLineType = ILogLine
const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

// ограничение generic
// c помощью наследования например
class Vehicle {
    run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle
}

class LCV extends Vehicle {
    capacity: number;
}

const vehicle = kmToMiles(new Vehicle())
const lcv = kmToMiles(new LCV())
kmToMiles({run: 1})

function logId<T extends  string | number, Y>(id: T, addData: Y): {id: T, data: Y} {
    console.log(id);
    console.log(addData);
    return {id, data: addData}
}

//generic классы
class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data: D, error: E ) {
        if (data) {
            this.data = data
        }

        if (error) {
            this.error = error
        }
    }
}

const res = new Resp<string, number>('data', 0)

class HTTPResp<F> extends Resp<string, number> {
    code: F;

    setCode(code: F) {
        this.code = code;
    }
}

const res2 = new HTTPResp();

// mixins
// ладно. Перегрузка это было еще норм, а это точно говно ебаное какое то
type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) { }
}

type ListType = GConstructor<List>

class ExtendedListClass extends List {
    first() {
        return this.items[0]
    }
}
// миксины пишут с большй буквы
function ExtendedList<TBase extends ListType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0]
        }
    }
}
const list = ExtendedList(List)
const res = new list(['first', 'second'])
