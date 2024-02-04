enum Role {
    Admin = "Admin", // - can do anything
    FruitJohn = "FruitJohn", //- can do anything in the list of fruits, while vegetables can only display a list and add new ones
    VegetarianMary = "VegetarianMary"// - on the list of vegetables can do anything, while fruits can only display the list and add new ones
}
export default Role