
/*
     chapter 51. 클래스
*/

class Cart {
    constructor() {
        this.store = {};
    }

    addProduct(product) {
        this.store[product.id] = product;
    }

    getProduct(id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id: 1, name: '노트북'});
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);



/*
     chapter 52. 클래스 상속
*/

class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line');
    }
}

//상속했기 떄문에 부모 클래스에 정의된 메소드 사용 가능
class BarChart extends Chart {
    constructor(width, height) {
        super(width, height)
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barchart1 = new BarChart(100, 100);
barchart1.draw();




/*
     chapter 53. 클래스 정적 메소드와 속성
*/

class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Depos extends Product {
    depose() {
        this.depose = true;
    }
 }

 const gum = Product.build('껌', 1000);
 console.log(gum);

 const clothes = new Depos(1,'옷',2000);
 console.log(clothes);
 const tax = Depos.getTaxPrice(clothes);
 console.log(tax);