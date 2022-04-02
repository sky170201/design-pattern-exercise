
class Girl {
    constructor() {
        this.name = 'candy'
    }
    eat() {}
}

const candy = new Girl()

console.log(Girl.prototype)
console.log(candy.__proto__)
console.log(Girl.prototype === candy.__proto__)


var obj = {
    name: 'candy',
    age: 6,
    info: {
        a: 'a'
    },
    list1: [1, 2, 3, 4],
    list2: [
        {b: 'b', c: 'c'},
        {d: 'd', e: 'e'}
    ],
}
obj.cc = obj

function deepClone(obj, weakmap = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) return obj

    const value = weakmap.get(obj)
    if (value) return value
    
    const newObj = Array.isArray(obj) ? [] : {}
    
    weakmap.set(obj, newObj)
    
    for (let key in obj) {
        newObj[key] = deepClone(obj[key], weakmap)
    }
    return newObj
}

const newObj = deepClone(obj)
obj.info.a = 'aaa'
console.log(newObj)