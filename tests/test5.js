"use strict";
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
class Cart {
    constructor() {
        this.products = []; //инициализируем пустым массивом
    }
    addProduct(product) {
        this.products.push(product);
    }
    delProduct(removeId) {
        this.products = this.products.filter((e) => e.id !== removeId);
    }
    calcSum() {
        let a = this.products.map((p) => p.price);
        let rez = a.reduce((p1, p2) => p1 + p2);
        return rez;
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    Checkout() {
        if (this.products.length == 0) {
            throw new Error('Нет товаров в корзине');
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки');
        }
        return { success: true };
    }
}
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
    }
}
class DeliveryAtHome extends Delivery {
    constructor(date, address) {
        super(date);
    }
}
class DeliveryAtPostamat extends Delivery {
    constructor(shopId) {
        super(new Date());
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'торт', 20));
cart.addProduct(new Product(2, 'бутерброд', 30));
cart.addProduct(new Product(3, 'чай', 40));
cart.delProduct(1);
cart.setDelivery(new DeliveryAtPostamat(2));
console.log(cart.calcSum());
console.log(cart.Checkout());
