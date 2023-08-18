class User {
    name: string;
    age: number;

// перезагрузки
    constructor();

    constructor(name: string);
   constructor(age: number);

   constructor(name: string, age: number);
    //конструктор имплементации (выполнения)
    constructor(ageOrName?: string | number, age?: number) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        } else if (typeof ageOrName === 'number') {
            this.age = age;
        }
    }
}

const user = new User('Вася');
console.log(user);
user.name = 'asf'
console.log(user);

class Admin {
    role: number;
}

const admin = new Admin();
admin.role = 1;

// конструктор

const user2 = new User();
const user3 = new User(33);
const user4 = new User('asd', 33)

// методы

enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }
// вот это метод
    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unholdPayment(): void {
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
    skills: string[];

    // написать метод, который добавляет то что было передано к skills пользователя
    addSkill(skillOrSkills: string[]): void
    addSkill(skillOrSkills: string): void
    addSkill(skillOrSkills: string[] | string): void {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills)
        } else {
            this.skills.concat(skillOrSkills)
        }
    }
}

function run(distance: number): number
function run(distance: string): string
function run(distance: number | string): number | string {
if (typeof distance == 'number' ) {
    return 1
} else return ''
}

run()

// getters and setters

class User1 {
    _login: string;
    password: string;

    set login(l: string) {
        this._login = 'user-' + l;
    }

    get login() {
        return 'nologin'
    }
}

const user44 = new User1();
user44.login = 'asdsadf';
console.log(user44);

// имплементация

interface ILogger {
    log(...args): void;
    error(...args): void;
}

class logger implements ILogger {
    error(...args): void {
        throw new Error('asdfs');
        console.log(...args);
    }
    async log(...args): Promise<void> {
        throw new Error('asdfs')
        console.log(...args);
    }
}

interface IPayble {
    pay(paymId: number): void
    price?: number;
}

class user11 implements IPayble {
    price: number;

    pay(paymId: number | string): void {}
}

// наследование Extends

type PaymentStatus1 = 'new' | 'paid';

class Paymentt {
    id: number;
    status: PaymentStatus1 = 'new';

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = 'paid'
    }
}

class PersistedPayment extends Paymentt {
    dbId: number;
    paidAt: Date;

    // super обязателен если мы переопределяем конструктор
    constructor() {
        const  id = Math.random();
        super(id)
    }

    override pay(date?: Date) {
        super.pay()
        if (date) {
            this.paidAt = date
        }
    }
}

class User221 {
    name: string = 'user'

    constructor() {
        console.log(this.name);
    }
}

class Admin221 extends User221 {
    name: string = 'admin'

    constructor() {
        super(); //всегда первой строкой
        console.log(this.name);
    }
}

new Admin221()

new Error('');

class HttpError extends Error {
    code: number
    constructor(message: string, code?: number) {
        super(message);
        this.code = code ?? 500;
    }
}

// видимость свойств

class Car {
    make: string;
    private damage: string[]
    private _model: string;
    #price: number;

    addDamage(dam: string){
        this.damage.push(dam)
    }

    set model(m: string){
        this._model = m
    }


    get model(){
        return this._model
    }
}

// статические свойства

class UserService {
    static db: any

    static getUser(id: number) {
        return UserService.db.findById(id)
    }

    create() {
        UserService.db
    }

    constructor(id: number) {

    }

    // метод с таким названием выполняется сразу как только
    // запускается код. Статичный блок
    static {
        UserService.db = 'sdf'
    }
}

UserService.db;

const init = new UserService()
init.create()

// работа с this

class Paypay {
    private date: Date = new Date()

    //this: Paypay подсказка js что мы должны работать с контекстом Paypay а не с чем то другим
    getDate(this: Paypay) {
              return this.date
    }

    getDateArrow = () => {
        return this.date
    }
}

const p = new Paypay()
console.log(p.getDate());

const user223 = {
    id: 1,
    // без bind результат будет underfund. Бинд в текущую функцию передает контекст объекта
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow()
}

console.log(user223);

class PaymentPersist extends Paypay {
    save() {
        return super.getDate()
    }
}

console.log(new PaymentPersist().save());

// типизация this

class UserBuilder {
    name: string

    // тип this ссылается на UserBuilder
    setName(name: string): this {
        this.name = name
        return this
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder  {
    roles: string[]
}

const rezzz = new UserBuilder().setName('asdf');
const rezzz2 = new AdminBuilder().setName('asdf');

let uuuser: UserBuilder | AdminBuilder = new UserBuilder()

// пример проверки типа через тайпгард
if (uuuser.isAdmin()) {
    console.log(uuuser);
} else
    console.log(uuuser);

// абстрактные классы
// мы может задать некоторый класс, который реализует внутреннюю функцию.
// херь какая то в общем))
// а нет, оказалась не хер. Абстрактный класс - это класс который не подразумевает в себе других экземпляров
// например, абстрактный класс будет животное, а классы которые его будут наследовать кошка, собака и тд..
 abstract class Controller {
     abstract handle(req: any): void

     handleLogs(req: any) {
         console.log('start');
         this.handle(req);
         console.log('end');
     }
 }

 class UserController extends Controller {
     handle(req: any) {
         console.log(req);
     }
 }

 const c = new UserController();
 c.handleLogs('sdf');