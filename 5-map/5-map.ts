const buketSize: number = 5;

type Container = {
    id: string;
    value: string;
};

class newMap {
    private buket: Container[][];

    constructor(l: number) {
        this.buket = new Array(l);
    }

    public set(key: string, value: string): void {
        const buketId: number = this.hashSum(key);

        if (!this.buket[buketId]) {
            this.buket[buketId] = [{id: key, value: value}]
        } else this.buket[buketId].push({id: key, value: value})
    }

    public get(key: string) {
        const a = this.findValue(key)
        if (a) {
            return this.buket[a.getKey][a.i];
        }
    }

    public delete(key: string): void {
        const a = this.findValue(key)
        if (a) {
            this.buket[a.getKey].splice(a.i, 1);
        }
    }

     public clear(): void {
        this.buket = []
    }

    private findValue(key: string): {getKey: number, i: number} | void {
        const getKey: number = this.hashSum(key)
        const findValue = this.buket[getKey]
        if (!findValue) {
            throw new Error('Такого значения нет')
        }

        for (let i: number = 0; findValue.length; i++) {
            if (findValue[i].id === key) {
                return {getKey, i}
            }
        }
    }

    private hashSum(s: string): number {
        let sum: number = 0;
        for (let i: number = 0; i < s.length; i++) {
            sum += s.charCodeAt(i);
        }
        return sum % buketSize;
    }
}

const map = new newMap(buketSize)

map.set('Иваныч', 'Крутой мужик')
map.set('Никита', 'Занял денег')
map.set('Борисыч', 'Купил динозавра')
map.set('Федорыч', 'Прыгал с парашютом')
map.set('Мартыныч', 'Разговаривает с пикачу')
map.set('Феофаныч', 'Поехал кукухой')
map.set('Аркадьич', 'Хз правильно ли пишется')

console.log(map);

console.log(map.get('Феофаныч'));

map.delete('Феофаныч')
console.log(map);

map.clear()

console.log(map);
