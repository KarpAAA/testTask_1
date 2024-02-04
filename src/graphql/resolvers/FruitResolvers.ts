import fruitService from "../../services/FruitServices";

export const fruitMutations = {
    createFruit: (_, {fruitArgs}) => {
        return fruitService.createFruit(fruitArgs);
    },
    editFruit: (_, {fruitArgs}) => {
        return fruitService.editFruit(fruitArgs);
    },
    removeFruit: (_, {fruitId}) => {
        return fruitService.removeFruit(fruitId);
    },
}

export const fruitQueries = {
    fruits: () => fruitService.findAll(),
    fruitById: (_, {fruitId}) => fruitService.findOne(fruitId)
}