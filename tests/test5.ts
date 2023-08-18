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

type varDelivery = DeliveryAtHome | DeliveryAtPostamat;

class Cart {
   private products: Product[] = []; //инициализируем пустым массивом
   private delivery: varDelivery

    addProduct(product: Product):void {
        this.products.push(product)
    }

    delProduct(removeId: number):void {
        this.products = this.products.filter((e: Product) => e.id !== removeId)
    }

    calcSum(): number {
        let a: number[] = this.products.map((p: Product) => p.price);
        let rez: number = a.reduce((p1, p2) => p1 + p2)
        return rez;
    }

    setDelivery(delivery: varDelivery): void {
        this.delivery = delivery
    }

    Checkout() {
       if (this.products.length == 0) {
           throw new Error('Нет товаров в корзине')
       }
   if (!this.delivery) {
       throw new Error('Не указан способ доставки')
   }
   return {success: true}
    }
}

class Product {
    constructor( public id: number,
                 public name: string,
                 public price: number) {
    }
}

class Delivery {
    constructor(date: Date) {
    }
}

class DeliveryAtHome extends Delivery {
    constructor(date: Date, address: string) {
        super(date);
    }
}

class DeliveryAtPostamat extends Delivery {
    constructor(shopId: number) {
        super(new Date());
    }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'торт', 20))
cart.addProduct(new Product(2, 'бутерброд', 30))
cart.addProduct(new Product(3, 'чай', 40))
cart.delProduct(1)
cart.setDelivery(new DeliveryAtPostamat(2))
console.log(cart.calcSum());
console.log(cart.Checkout());