import vegetableService from "../../services/VegetableServices";
export const vegetableMutations =  {
    createVegetable: (_, {vegetableArgs}) =>{
        return vegetableService.createVegetable(vegetableArgs);
    },
    editVegetable: (_, {vegetableArgs}) =>{
        return vegetableService.editVegetable(vegetableArgs);
    },
    removeVegetable: (_, {vegetableId}) =>{
        return vegetableService.removeVegetable(vegetableId);
    },
}

export const vegetableQueries = {
    vegetables: () => vegetableService.findAll(),
    vegetableById: (_, {vegetableId}) => vegetableService.findOne(vegetableId)
}