import Fruit from "../models/Fruit";

class FruitServices {
    fruits: Fruit[] = [
        {id: "1", name: "Apple", price: 100},
        {id: "2", name: "Banana", price: 200},
        {id: "3", name: "Orange", price: 300},
    ];

    async findAll() {
        return this.fruits;
    }

    findOne(id: any) {
        return this.fruits.find((f) => f.id === id);
    }

    createFruit(fruit: any) {
        const newFruit = {...fruit, id: Date.now()}
        this.fruits.push(newFruit);
        console.log(this.fruits);
        return newFruit;
    }

    editFruit(fruitArg: any) {
        const index = this.fruits.findIndex(fruit => fruit.id === fruitArg.id);

        if (index !== -1) {
            this.fruits[index] = {...this.fruits[index], ...fruitArg};
            return this.fruits[index];
        }
        return null;
    }

    removeFruit(fruitId: any) {
        this.fruits = this.fruits.filter((fruit) => fruit.id != fruitId)
        return {
            message: "Deleting was successful",
            code: 200
        };
    }
}

export default new FruitServices();