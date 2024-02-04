const allowedActionsForRoles: any = {
    Admin: ["FruitById", "Fruits", "VegetableById", "Vegetables", "Users", "GenerateToken",
        "CreateFruit", "EditFruit", "RemoveFruit", "CreateVegetable", "EditVegetable",
        "RemoveVegetable", "UserCreate", "UserDelete"],
    Unauthorized: ["UserCreate","GenerateToken"],
    FruitJohn: ["CreateVegetable", "Vegetables",
        "CreateFruit", "EditFruit", "RemoveFruit", "FruitById", "Fruits",
        "UserCreate", "UserDelete", "GenerateToken",],
    VegetarianMary: ["Fruits", "CreateFruit", "GenerateToken", "UserCreate", "UserDelete",
        "CreateVegetable", "EditVegetable", "RemoveVegetable", "VegetableById", "Vegetables"]
}
export default  allowedActionsForRoles;