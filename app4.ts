// юнион тип, с или
function logID(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id);
    } else {
        console.log(id);
    }
}

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    }
}

function logObject(obj: {a: number} | {b: number}) {
    if ( 'a' in obj) {
        console.log(obj.a);
    }
}

function logIds(a: string | number, b: string | boolean) {
    if (a === b) {

    } else {
        console.log(a);
    }
}

// литеральный тип
function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1
}

//алиасы типов
type httpMethod = 'post' | 'get'

function fetchWithAuth1(url: string, method: httpMethod) {
}

type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    id: number
}

//интерсекшен
type UserWithRole = User & Role;

let user: UserWithRole = {
    name: 'asdf',
    age: 2323,
    skills: ['1', '2'],
    id: 3
}

// интерфейсы
interface IUser {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
}

interface IUserWithRole extends IUser {
    role: number;
}

// или
// interface IUserWithRole extends IUser, IRole

// пример описания словаря
interface IUserDic {
    [index: number]: User
}

// or
type ud = Record<number, User>

// ? - опционально
interface UserI {
    login: string;
    password?: string
}

function multiply(first: number, second: number = 5): number {
    return first * second
}

interface IUserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: IUserPro) {
    const t = user.password?.type
}

function test(param?: string) {
    const t= param ?? multiply(5)
}

// функция ничего не возвращает
function logID(id: number | string ):void {
    console.log(id);
}

// когда мы хотим игнорировать тип возвращаемого значения мы возвращаем void
type voidFunction = () => void;

const f1: voidFunction = () => {

}

const f2: voidFunction = () => {
return true
}

const b = f2();

const skills = ['dev', 'sdfa']

const  user2 = {
    s: ['s']
}

skills.forEach((skill) => user2.s.push(skill));

// unknown используется когда мы не знаем какого типа данные у нас будут получены
// например с сервера или апи непонятно что придет, используем вместо any
let input: unknown;
input = 3;
input = ['sdf', 'sdf'];

let res: any = input;

function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        i
    }
}

run(input)

async function getData() {
    try {
        await fetch('')
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}


async function getDataForce() {
    try {
        await fetch('')
    } catch (error) {
 const e = error as Error;
        }
    }

    type u1 = unknown | null;

type i1 = unknown & string;

// never
// функция не возразащается. Никогда не будет присвоено ничего
function generateError(message: string):never {
    throw new Error(message)
}

function dumpError():never {
    while(true) {}
}

function rec():never {
    return rec()
}


// пример использования never как средство проверки, что мы не зайдем в ту или иную ветку логики
// при добавлении новых типов
type paymantAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymantAction) {
    switch (action) {
        case 'refund':
            //...
        case 'checkout':
        //...
        break;
        default:
            const _: never = action;
            throw new Error('Нет такого action')
    }
}

// ограничивает или блокирует одну из веток если нет исчерпывающей проверки типов
function isString(x: string| number): boolean {
    if (typeof x == 'string') {
        return true;
    } else if(typeof x == 'number') {
        return false;
    }
    generateError('sdfds')
}

// null
// можно
const n: null = null;
const n1:any = null;

// нельзя. Чтобы разрешить в tsconfig опция strictNullChecks
const n2: string = null;

interface Username {
    name: string
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
return {
    name: 'Vsdfsd'
} as Username
    }
}

const sdf = getUser();

if (sdf) {
    const sdff = sdf.name;
}

// _________________
let a = 5;
let bb: string = a.toString();

let cc: number = parseInt(bb);

interface Sdff {
    name: string;
    email: string;
    login: string;
}

const qwe = {
    name: 'sdf',
    email: 'sdfsdffs',
    login: 'sdfsdf'
} as Sdff

interface Admin {
    name: string;
    role: number;
}

const adamin: Admin = {
    ...qwe,
    role: 1
}

// type guard проверка по типам, для обращения к нужным свойствам нужного объекта
function logID(id: string | number) {
    if (isString1(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}
// простая функция тайпгард
function isString1(x: string | number): x is string {
    return typeof x === 'string'
}

function isAdmin(user: Admin | Sdff): user is Admin {
    return 'role' in user;
}

function setRole(user: Admin | Sdff){
    if (isAdmin(user)) {
        user.role = 0;
    } else throw new Error('not admin')
}

// asserts
// функции которые если не выполняются кидают ошиюбку
interface IUser2 {
    name: string
}

const f = 'sdfsdf'

assertUser(f)
f.name = 'asdsdf'


function assertUser(obj: unknown): asserts obj is IUser2 {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return
    } else throw new Error('Не пользователь')
}