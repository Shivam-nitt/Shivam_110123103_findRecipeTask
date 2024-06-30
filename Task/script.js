// Sample data for ingredients and recipes
let ingredients = [
    { name: "Tomato" },
    { name: "Mozzarella Cheese" },
    { name: "Basil" },
    { name: "Olive Oil" },
    { name: "Pasta" },
    { name: "Garlic" },
    { name: "Parmesan Cheese" },
    { name: "Chicken Breast" },
    { name: "Lemon" }
];

let recipes = [
    {
        name: "Caprese Salad",
        ingredients: ["Tomato", "Mozzarella Cheese", "Basil", "Olive Oil"],
        image: "images/caprese-salad.jpg",
        instructions: "Slice tomatoes and mozzarella. Arrange with basil leaves. Drizzle with olive oil and season with salt and pepper."
    },
    {
        name: "Pasta Aglio e Olio",
        ingredients: ["Pasta", "Garlic", "Olive Oil", "Parmesan Cheese"],
        image: "images/pasta-aglio-e-olio.jpg",
        instructions: "Cook pasta. Saute minced garlic in olive oil. Toss pasta with garlic oil. Serve with grated Parmesan cheese."
    },
    {
        name: "Grilled Lemon Chicken",
        ingredients: ["Chicken Breast", "Lemon", "Olive Oil", "Garlic"],
        image: "images/grilled-lemon-chicken.jpg",
        instructions: "Marinate chicken with olive oil, lemon juice, and minced garlic. Grill until fully cooked."
    }
];

// Function to display ingredients
function displayIngredients() {
    let ingredientList = document.getElementById('ingredientList');

    ingredients.forEach(ingredient => {
        let li = document.createElement('li');
        li.textContent = ingredient.name;
        ingredientList.appendChild(li);
    });
}

// Function to display recipes based on searched ingredient
function displayRecipesByIngredient(searchTerm) {
    let recipeList = document.getElementById('recipeResults'); // Corrected ID reference
    recipeList.innerHTML = ''; // Clear previous results

    recipes.forEach(recipe => {
        if (recipe.ingredients.includes(searchTerm)) {
            let recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            let image = document.createElement('img');
            image.src = recipe.image;
            image.alt = recipe.name;
            recipeDiv.appendChild(image);

            let name = document.createElement('h3');
            name.textContent = recipe.name;
            recipeDiv.appendChild(name);

            let ingredientsList = document.createElement('p');
            ingredientsList.textContent = "Ingredients: " + recipe.ingredients.join(', ');
            recipeDiv.appendChild(ingredientsList);

            let instructions = document.createElement('p');
            instructions.textContent = "Instructions: " + recipe.instructions;
            recipeDiv.appendChild(instructions);

            recipeList.appendChild(recipeDiv);
        }
    });

    if (recipeList.children.length === 0) {
        recipeList.innerHTML = '<p>No recipes found with the selected ingredient.</p>';
    }
}

// Event listener for input field to search for recipes by ingredient
document.addEventListener('DOMContentLoaded', function() {
    displayIngredients(); // Display initial list of ingredients

    let searchInput = document.getElementById('searchInput');
    let searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', function() {
        let searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            displayRecipesByIngredient(searchTerm);
        } else {
            alert('Please enter an ingredient to search.');
        }
    });
});
