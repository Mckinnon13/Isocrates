/*
Assignment | Object Literal: Create a Recipe Book
Description:
Design a recipe book application using object literals in JavaScript. Each recipe should be 
represented by an object literal containing properties such as title, ingredients, instructions, 
and difficulty level. Implement methods to add new recipes, add method to search based on ingredient and 
display recipes based on difficulty level.
*/

const recipeBook = {
    recipes: [],
    addRecipe( title, ingredients, instructions, difficultyLevel) {
        const recipe = {
            title,
            ingredients,
            instructions,
            difficultyLevel,
            available: true,
        }
        this.recipes.push(recipe);
    },
searchByRecipe(title){
    return this.recipes.filter(recipe=>recipe.title.toLowerCase().includes(title.toLowerCase()));
},

searchByDificultyLevel(difficultyLevel){
    return this.recipes.filter(recipe=>recipe.difficultyLevel.toLowerCase().includes(difficultyLevel.toLowerCase()));
}
}

const RB = Object.create(recipeBook);
RB.addRecipe("Chapati", "Wheat Flour, Salt, Water", "Knead the dough, cook it on a pan", "Easy");
RB.addRecipe("Maggie", "Noodles, Water, Taste Maker", "Heat water, add all the items", "Easy");
RB.addRecipe("Biriyani", "Rice, Masala, Chicken", "Fry Chicken, Add Rice and Chicken inside cooker, Cook for 30 mins", "Hard");
//console.log(RB.recipes);
console.log(RB.searchByDificultyLevel("hard"));