
let fruit = "apple"
fruit = fruit.split("")
console.log(fruit)

for (let i = 0, j = fruit.length - 1; i < j; i++, j--) {
    [fruit[i], fruit[j]] = [fruit[j], fruit[i]]
}

console.log(fruit)