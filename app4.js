"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// юнион тип, с или
function logID(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
}
function logIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
// литеральный тип
function fetchWithAuth(url, method) {
    return 1;
}
function fetchWithAuth1(url, method) {
}
let user = {
    name: 'asdf',
    age: 2323,
    skills: ['1', '2'],
    id: 3
};
function multiply(first, second = 5) {
    return first * second;
}
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
// функция ничего не возвращает
function logID(id) {
    console.log(id);
}
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2();
const skills = ['dev', 'sdfa'];
const user2 = {
    s: ['s']
};
skills.forEach((skill) => user2.s.push(skill));
// unknown используется когда мы не знаем какого типа данные у нас будут получены
// например с сервера или апи непонятно что придет, используем вместо any
let input;
input = 3;
input = ['sdf', 'sdf'];
let res = input;
function run(i) {
    if (typeof i == 'number') {
        i++;
    }
    else {
        i;
    }
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            const e = error;
        }
    });
}
// never
// функция не возразащается. Никогда не будет присвоено ничего
function generateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case 'refund':
        //...
        case 'checkout':
            //...
            break;
        default:
            const _ = action;
            throw new Error('Нет такого action');
    }
}
// ограничивает или блокирует одну из веток если нет исчерпывающей проверки типов
function isString(x) {
    if (typeof x == 'string') {
        return true;
    }
    else if (typeof x == 'number') {
        return false;
    }
    generateError('sdfds');
}
// null
// можно
const n = null;
const n1 = null;
// нельзя. Чтобы разрешить в tsconfig опция strictNullChecks
const n2 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Vsdfsd'
        };
    }
}
const sdf = getUser();
if (sdf) {
    const sdff = sdf.name;
}
// _________________
let a = 5;
let bb = a.toString();
let cc = parseInt(bb);
const qwe = {
    name: 'sdf',
    email: 'sdfsdffs',
    login: 'sdfsdf'
};
const adamin = Object.assign(Object.assign({}, qwe), { role: 1 });
// type guard проверка по типам, для обращения к нужным свойствам нужного объекта
function logID(id) {
    if (isString1(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// простая функция тайпгард
function isString1(x) {
    return typeof x === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function setRole(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else
        throw new Error('not admin');
}
const f = 'sdfsdf';
assertUser(f);
f.name = 'asdsdf';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    else
        throw new Error('Не пользователь');
}
