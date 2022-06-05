/*
Flyweight - структурный патер, который позволяет внести большее количество определенных объектов
в выделенную память, те позволяет экономить ресурсы, разделяя общее состояние объекта между собой
вемсто хранения одинаковых данных
особенности:
1)неизменяемость, все свое внутренне состояние он должен получить, черз конструктор
2)создовать и рабоать с Flyweight, легче всего через пораждающий патер через Factory
Factory(интерфейс воздание объектов)
 */
let dataFlyweight = [];

class Flyweight {
    constructor(models) {
        this.models = {}
    }
}

class FlyweightFactory {
    create(infоArrays) {
        let count = 0
        if (dataFlyweight.length === 0){
            dataFlyweight = [...infоArrays]
        } else {
         for (let itemData of dataFlyweight){
             for (let itemInfo of infоArrays){
                 if (itemData === itemInfo){
                     count++;
                 }
             }
            }
         if (count !== 0){
             console.log(`Flyweight уже существует со значением ${infоArrays}` )
             return false;
             count = 0;
         } else{
             count = 0;
             dataFlyweight = [...infоArrays]
             // console.log('все норма')
             let data = ['Производитель и модель', 'GPSPo', 'скорость полета', 'тип управления']
             this.models = new Flyweight(infоArrays)
             for (let i = 0; i < data.length; i++) {
                 let key = data[i];
                 let value = infоArrays[i];
                 this.models[key] = value;
             }
             return this.models
         }
        }
        }
    getInfo (){
        console.table(this.models)
    }
}

/*
ПАТТЕРН ФАСАД
Предоставляет унифицированный интерфейс к группе интерфейсов подсистемы. Фасад определяет высокоуровневый интерфейс,
упрощающий работу с подсистемой.
Превращает сложный интерфейс с множеством методов в простой интерфейс с минимум методов.
В данном случае интерфейс вебсайта будет иметь всего 2 метода - getProduct()/getInfo(), при том что под
капотом выполняется6 методов.
*/

class InfoProduct {
    availabilityInfo (){
        console.log('Все товары в наличии')
    }
    delivery() {
        console.log('Доставка в течение 2-х недель')
    }
    country() {
        console.log('Страна производитель китай')
    }
    deliveryInfo() {
        console.log('Курьерска служба')
    }
}

class Product{
    constructor(dataObj1,dataObj2,dataObj3, dataObj4) {
        this.dataArrays = [dataObj1, dataObj2, dataObj3, dataObj4]
    }
    theme = "квадрокоптеры";
    paramsAll = ["Производитель и модель", "GPSPo", "скорость полета", "тип управления"]
    systemOut (){
        let n_theme = 0;
        let n_params = 0;
        console.log("Устройства: " + this.theme + ", параметры: " + this.paramsAll[(n_params++)] + ", " +
            this.paramsAll[(n_params++)] + ", " + this.paramsAll[(n_params++)]);
    }
    systemOutObj (){
        console.log('Все товары:')
        this.dataArrays.forEach(data => console.table(data))
    }
}

class Facade{
  constructor(product, infoProduct) {
      this.product = product
      this.infoProduct = infoProduct

      if (!this.product){
          throw new Error(`В ${this.product} не указан аргумент str_theme`)
      }
      if (!this.infoProduct){
          throw new Error(`В ${this.infoProduct} не указан аргумент infoProduct`)
      }
  }
  getProduct(){
      console.log('________________________________')
      this.infoProduct.availabilityInfo()
      this.product.systemOut()
      console.log('________________________________')
      this.product.systemOutObj()
  }
  getInfo(){
      console.log('________________________________')
      this.infoProduct.delivery()
      this.infoProduct.deliveryInfo()
      console.log('________________________________')
      this.infoProduct.country()

  }
}

let factory = new FlyweightFactory()
let arr1 = ['Yuneec Typhoon H Plus', 'GPS', 181.5, 'персональная наземная станция ST16']
let arr2 = ['DJI Mavic Pro (Platinum)', 'GPS / ГЛОНАСС', 65.5, 'пульт дистанционного управления']
let arr3 = ['Yuneec Typhoon H3',  'GPS',  72.0, 'персональная наземная станция ST16']
let arr4 = ['parrot ANAFI', 'GPS / ГЛОНАСС',  15.3, 'приложение телефона']

let prod1 = factory.create(arr1)
let prod2 = factory.create(arr2)
let prod3 = factory.create(arr3)
let prod4 = factory.create(arr3)
// let prod4 = factory.create(arr4)

let allProduct = new Product(prod1,prod2, prod3, prod4)

let infoWebsite = new Facade(new Product(prod1,prod2, prod3, prod4) ,new InfoProduct)
infoWebsite.getProduct()
infoWebsite.getInfo()
