import Vegetable from "../models/Vegetable";

class VegetableServices {
    vegetables: Vegetable[] = [
        {id: "1", name: "Apple", price: 100},
        {id: "2", name: "Banana", price: 200},
        {id: "3", name: "Orange", price: 300},
    ];

    findAll() {
        return this.vegetables;
    }

    findOne(id: any) {
        return this.vegetables.find((v) => v.id === id);
    }

    createVegetable(vegetable: any) {
        console.log(vegetable)
        const newVegetable = {...vegetable, id: Date.now()}
        this.vegetables.push(newVegetable);
        return newVegetable;
    }

    editVegetable(vegetableArg: any) {
        const index = this.vegetables.findIndex(vegetable => vegetable.id === vegetableArg.id);

        if (index !== -1) {
            this.vegetables[index] = {...this.vegetables[index], ...vegetableArg};
            return this.vegetables[index];
        }
        return null;
    }

    removeVegetable(vegetableId: any) {
        this.vegetables = this.vegetables.filter((v) => v.id != vegetableId)
        return {
            message: "Deleting was successful",
            code: 200
        };
    }
}

export default new VegetableServices();