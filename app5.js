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
var _Car_price;
class User {
    //конструктор имплементации (выполнения)
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = age;
        }
    }
}
const user = new User('Вася');
console.log(user);
user.name = 'asf';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
// конструктор
const user2 = new User();
const user3 = new User(33);
const user4 = new User('asd', 33);
// методы
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    // вот это метод
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('платеж не может быть возвращен');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
// перегрузка методов. Упражнение
class UserSkill {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
function run(distance) {
    if (typeof distance == 'number') {
        return 1;
    }
    else
        return '';
}
run();
// getters and setters
class User1 {
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return 'nologin';
    }
}
const user44 = new User1();
user44.login = 'asdsadf';
console.log(user44);
class logger {
    error(...args) {
        throw new Error('asdfs');
        console.log(...args);
    }
    log(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('asdfs');
            console.log(...args);
        });
    }
}
class user11 {
    pay(paymId) {
    }
}
class Paymentt {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Paymentt {
    // super обязателен если мы переопределяем конструктор
    constructor() {
        const id = Math.random();
        super(id);
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
class User221 {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin221 extends User221 {
    constructor() {
        super(); //всегда первой строкой
        this.name = 'admin';
        console.log(this.name);
    }
}
new Admin221();
new Error('');
class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
// видимость свойств
class Car {
    constructor() {
        _Car_price.set(this, void 0);
    }
    addDamage(dam) {
        this.damage.push(dam);
    }
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }
}
_Car_price = new WeakMap();
// статические свойства
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
    constructor(id) {
    }
}
// метод с таким названием выполняется сразу как только
// запускается код. Статичный блок
(() => {
    UserService.db = 'sdf';
})();
UserService.db;
const init = new UserService();
init.create();
// работа с this
class Paypay {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    //this: Paypay подсказка js что мы должны работать с контекстом Paypay а не с чем то другим
    getDate() {
        return this.date;
    }
}
const p = new Paypay();
console.log(p.getDate());
const user223 = {
    id: 1,
    // без bind результат будет underfund. Бинд в текущую функцию передает контекст объекта
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow()
};
console.log(user223);
class PaymentPersist extends Paypay {
    save() {
        return super.getDate();
    }
}
console.log(new PaymentPersist().save());
// типизация this
class UserBuilder {
    // тип this ссылается на UserBuilder
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const rezzz = new UserBuilder().setName('asdf');
const rezzz2 = new AdminBuilder().setName('asdf');
let uuuser = new UserBuilder();
// пример проверки типа через тайпгард
if (uuuser.isAdmin()) {
    console.log(uuuser);
}
else
    console.log(uuuser);
// абстрактные классы
// мы может задать некоторый класс, который реализует внутреннюю функцию.
// херь какая то в общем))
// а нет, оказалась не хер. Абстрактный класс - это класс который не подразумевает в себе других экземпляров
// например, абстрактный класс будет животное, а классы которые его будут наследовать кошка, собака и тд..
class Controller {
    handleLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
const c = new UserController();
c.handleLogs('sdf');
