class Vuex {
    constructor(name) {
        this.name = name
    }

    static getInstance(name) {
        if (!Vuex.instance) {
            Vuex.instance = new Vuex(name)
        }
        return Vuex.instance
    }
}

const v1 = Vuex.getInstance('candy')
const v2 = Vuex.getInstance('tom')
// console.log(v1 === v2)


function getSingleTonInstance(Ctor) {
    const args = [...arguments].slice(1)
    if (!Ctor.instance) {
        Ctor.instance = new Ctor(...args)
    }
    return Ctor.instance
}

class Test {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const t1 = getSingleTonInstance(Test, 'candy', 6)
const t2 = getSingleTonInstance(Test, 'tom', 3)
console.log(t1 === t2)
console.log(t1)
console.log(t2)


// 定义Storage
class StorageBase {
    getItem (key) {
        return localStorage.getItem(key)
    }
    setItem (key, value) {
        return localStorage.setItem(key, value)
    }
}

// 闭包
const Storage = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new StorageBase()
        }
        return instance
    }
})()


// 实现一个全局的模态框Modal
class ModalBase {
    constructor() {
        this.createModal()
    }
    createModal() {
        const div = document.createElement('div')
        div.innerHTML = '模态框弹窗'
        div.id = 'modal'
        div.style.display = 'none'
        document.body.appendChild(div)
    }
    open() {
        document.getElementById('modal').style.display = 'block'
    }
    close() {
        document.getElementById('modal').style.display = 'none'
    }
}

const Modal = (function() {
    let instance = null
    return function () {
        if (!instance) {
            instance = new ModalBase()
        }
        return instance
    }
}) ()

document.getElementById('open').addEventListener('click', () => {
    const modal = new Modal()
    modal.open()
})
document.getElementById('close').addEventListener('click', () => {
    const modal = new Modal()
    modal.close()
})