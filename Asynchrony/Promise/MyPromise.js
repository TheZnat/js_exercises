const FULFILLED = 'fulfilled' // выполнено
const PENDING = 'pending' // откланено
const REJECTED = 'rejected' // находиться на рассмотрении


class MyPromise{
    constructor(executor) {
        this.state = PENDING
        this.result = undefined
        this.onFulfilledFn = []
        this.onRejectedFn = []

        const resolve = (value) =>{
            if (this.state === PENDING){
                this.state = FULFILLED
                this.result = value
                this.onFulfilledFn.forEach((fn) =>{
                    fn(value)
                })
            }
        }
        const reject = (error) =>{
            if (this.state === PENDING){
                this.state = REJECTED
                this.result = error
                this.onRejectedFn.forEach((fn) =>{
                    fn(error)
                })
            }
        }
        try {
            executor(resolve, reject)
        }catch (error){
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.state === PENDING) {
                if (onFulfilled) {
                    this.onFulfilledFn.push(() => {
                        try {
                            const newResult = onFulfilled(this.result)
                            if (newResult instanceof MyPromise) {
                                newResult.then(resolve, reject)
                            } else {
                                // если не промис
                                resolve(newResult)
                            }
                        } catch (error) {
                            reject(error)
                        }
                    })
                }
                if (onRejected) {
                    this.onRejectedFn.push(() => {
                        try {
                            const newResult = onRejected(this.result)
                            if (newResult instanceof MyPromise) {
                                newResult.then(resolve, reject)
                            } else {
                                reject(newResult)
                            }
                        } catch (error) {
                            reject(error)
                        }
                    })
                }
            }
        if (onFulfilled && this.state === FULFILLED) {
            try {
                const newResult = onFulfilled(this.result)
                if (newResult instanceof MyPromise) {
                    newResult.then(resolve, reject)
                } else {
                    resolve(newResult)
                }
            } catch (error) {
                reject(error)
            }
            return
        }
        if (onRejected && this.state === REJECTED) {
            try {
                const newResult = onRejected(this.result)
                if (newResult instanceof MyPromise) {
                    newResult.then(resolve, reject)
                } else {
                    reject(newResult)
                }
            } catch (error) {
                reject(error)
            }
            return
        }
        })
    }
    catch(onRejected){
        return this.then(null, onRejected)
    }
}
//1 Конструктор на вход которого переходит executor в свойстваз которого две функции для успеха или ошибки,
// которые можно выполнить и изменить сосотояние

// const promise = new MyPromise((resolve, reject) => {
//     // resolve('success');
//     reject('error')
// })
// console.log(promise)

//2 Использование для отлаженного кода
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('success');
//     }, 3000)
// })
// console.log(promise)
// setTimeout(() => console.log(promise), 4000)


//3 resolve, reject можно вызвать только один раз
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() =>reject('error'), 1000)
//     resolve('success')
//     setTimeout(()=> resolve('success'), 2000)
// })
// console.log(promise)

//4 чтобы перехватить значения используетьяс метод then
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() =>{resolve('success')}, 1000)
// }).then( (value) =>{
//     console.log(value)
// })


// 5 чтобы перехватить ошибку используеться метож then
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() =>{reject(new Error('ошибка'))}, 1500)
// }).then((value)=>{
//     console.log(value)
// }, (error) => {
//     console.log(11,error)
// })

//6 чтобы перехватить ошибку можно использовать метод catch
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() =>{reject(new Error('ошибка'))}, 1500)
// }).catch((error) =>{
//     console.log(111, error)
// })

//7 можно вызвать then сколько угодно раз на одном промисе и получить один и тот же резальтат
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() =>{resolve('success')}, 1500)
// })
// promise.then((value) => console.log(value))
// promise.then((value) => console.log(value))
// promise.then((value) => console.log(value))
// promise.then((value) => console.log(value))

// 8 если вызывать then когда состояние было установлено, все равно получим значение
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{ resolve('success')}, 1500)
// })
// setTimeout(() =>{
//     promise.then((value) => console.log(value))
//     promise.then((value) => console.log(value))
//     promise.then((value) => console.log(value))
//     promise.then((value) => console.log(value))
// }, 2000)

// 9 можно использовать цепочки промисов и в then получать результат успеха
// const promise = new MyPromise((resolve, reject) => {
//     setTimeout(() =>{resolve('success')}, 1500)
// }).then((value) => {
//     return value + ' first then'
// }).then((value) =>{
//     return value + ' second then'
// }).then((value) =>{
//     console.log(value)
// })

//10 Можно возварщать в then новый промис и в then получать разклтат успеха
// const promise = new MyPromise((resolve, reject) => {
//     resolve('success')
// }).then((value) => {
//     return new MyPromise((resolve, reject) =>{
//         setTimeout(() => {resolve(value + 'new promise')}, 1000)
//     })
// }).then((value) => {
//     console.log(11,value)
// })

// 11 можно перехватывать ошибки общим методом catch
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() =>{ reject('error')}, 1500)
}).catch(error => {
    console.log(error)
})

