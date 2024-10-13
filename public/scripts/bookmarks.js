function toggleDropdown() {
    var dropdown = document.getElementById("user-dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.username')) {
        var dropdown = document.getElementById("user-dropdown");
        if (dropdown && dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}


const jsonString = "```json\n[\n    {\n        \"dish name\": \"Sweet Potato Chicken Stir Fry\",\n        \"items\": [\n            \"1 large chicken breast, thinly sliced\",\n            \"2 cups spinach, washed and trimmed\",\n            \"1 large sweet potato, peeled and cut into small cubes\",\n            \"2 tablespoons soy sauce\",\n            \"1 tablespoon oyster sauce\",\n            \"2 cloves garlic, minced\",\n            \"1 tablespoon ginger, minced\",\n            \"2 tablespoons vegetable oil\",\n            \"1 teaspoon sesame oil\",\n            \"Salt and pepper to taste\"\n        ],\n        \"procedure\": [\n            \"Heat vegetable oil in a large skillet over medium-high heat.\",\n            \"Add the minced garlic and ginger, sauté for 1 minute until fragrant.\",\n            \"Add the sliced chicken breast and stir fry until it is nearly cooked through, about 5-6 minutes.\",\n            \"Incorporate the sweet potato cubes, cook for about 8 minutes or until they begin to soften.\",\n            \"Toss the spinach into the skillet and stir until it wilts.\",\n            \"Drizzle with soy sauce, oyster sauce, and sesame oil. Stir everything together and cook for additional 2 minutes.\",\n            \"Season with salt and pepper to taste.\",\n            \"Serve hot.\"\n        ]\n    },\n    {\n        \"dish name\": \"Sweet Potato Chicken Stir Fry\",\n        \"items\": [\n            \"1 large chicken breast, thinly sliced\",\n            \"2 cups spinach, washed and trimmed\",\n            \"1 large sweet potato, peeled and cut into small cubes\",\n            \"2 tablespoons soy sauce\",\n            \"1 tablespoon oyster sauce\",\n            \"2 cloves garlic, minced\",\n            \"1 tablespoon ginger, minced\",\n            \"2 tablespoons vegetable oil\",\n            \"1 teaspoon sesame oil\",\n            \"Salt and pepper to taste\"\n        ],\n        \"procedure\": [\n            \"Heat vegetable oil in a large skillet over medium-high heat.\",\n            \"Add the minced garlic and ginger, sauté for 1 minute until fragrant.\",\n            \"Add the sliced chicken breast and stir fry until it is nearly cooked through, about 5-6 minutes.\",\n            \"Incorporate the sweet potato cubes, cook for about 8 minutes or until they begin to soften.\",\n            \"Toss the spinach into the skillet and stir until it wilts.\",\n            \"Drizzle with soy sauce, oyster sauce, and sesame oil. Stir everything together and cook for additional 2 minutes.\",\n            \"Season with salt and pepper to taste.\",\n            \"Serve hot.\"\n        ]\n    },\n    {\n        \"dish name\": \"Sweet Potato Chicken Stir Fry\",\n        \"items\": [\n            \"1 large chicken breast, thinly sliced\",\n            \"2 cups spinach, washed and trimmed\",\n            \"1 large sweet potato, peeled and cut into small cubes\",\n            \"2 tablespoons soy sauce\",\n            \"1 tablespoon oyster sauce\",\n            \"2 cloves garlic, minced\",\n            \"1 tablespoon ginger, minced\",\n            \"2 tablespoons vegetable oil\",\n            \"1 teaspoon sesame oil\",\n            \"Salt and pepper to taste\"\n        ],\n        \"procedure\": [\n            \"Heat vegetable oil in a large skillet over medium-high heat.\",\n            \"Add the minced garlic and ginger, sauté for 1 minute until fragrant.\",\n            \"Add the sliced chicken breast and stir fry until it is nearly cooked through, about 5-6 minutes.\",\n            \"Incorporate the sweet potato cubes, cook for about 8 minutes or until they begin to soften.\",\n            \"Toss the spinach into the skillet and stir until it wilts.\",\n            \"Drizzle with soy sauce, oyster sauce, and sesame oil. Stir everything together and cook for additional 2 minutes.\",\n            \"Season with salt and pepper to taste.\",\n            \"Serve hot.\"\n        ]\n    },\n    {\n        \"dish name\": \"Sweet Potato Chicken Stir Fry\",\n        \"items\": [\n            \"1 large chicken breast, thinly sliced\",\n            \"2 cups spinach, washed and trimmed\",\n            \"1 large sweet potato, peeled and cut into small cubes\",\n            \"2 tablespoons soy sauce\",\n            \"1 tablespoon oyster sauce\",\n            \"2 cloves garlic, minced\",\n            \"1 tablespoon ginger, minced\",\n            \"2 tablespoons vegetable oil\",\n            \"1 teaspoon sesame oil\",\n            \"Salt and pepper to taste\"\n        ],\n        \"procedure\": [\n            \"Heat vegetable oil in a large skillet over medium-high heat.\",\n            \"Add the minced garlic and ginger, sauté for 1 minute until fragrant.\",\n            \"Add the sliced chicken breast and stir fry until it is nearly cooked through, about 5-6 minutes.\",\n            \"Incorporate the sweet potato cubes, cook for about 8 minutes or until they begin to soften.\",\n            \"Toss the spinach into the skillet and stir until it wilts.\",\n            \"Drizzle with soy sauce, oyster sauce, and sesame oil. Stir everything together and cook for additional 2 minutes.\",\n            \"Season with salt and pepper to taste.\",\n            \"Serve hot.\"\n        ]\n    },\n    {\n        \"dish name\": \"Sweet Potato Chicken Stir Fry\",\n        \"items\": [\n            \"1 large chicken breast, thinly sliced\",\n            \"2 cups spinach, washed and trimmed\",\n            \"1 large sweet potato, peeled and cut into small cubes\",\n            \"2 tablespoons soy sauce\",\n            \"1 tablespoon oyster sauce\",\n            \"2 cloves garlic, minced\",\n            \"1 tablespoon ginger, minced\",\n            \"2 tablespoons vegetable oil\",\n            \"1 teaspoon sesame oil\",\n            \"Salt and pepper to taste\"\n        ],\n        \"procedure\": [\n            \"Heat vegetable oil in a large skillet over medium-high heat.\",\n            \"Add the minced garlic and ginger, sauté for 1 minute until fragrant.\",\n            \"Add the sliced chicken breast and stir fry until it is nearly cooked through, about 5-6 minutes.\",\n            \"Incorporate the sweet potato cubes, cook for about 8 minutes or until they begin to soften.\",\n            \"Toss the spinach into the skillet and stir until it wilts.\",\n            \"Drizzle with soy sauce, oyster sauce, and sesame oil. Stir everything together and cook for additional 2 minutes.\",\n            \"Season with salt and pepper to taste.\",\n            \"Serve hot.\"\n        ]\n    },\n    {\n        \"dish name\": \"Spinach and Sweet Potato Noodles with Chicken\",\n        \"items\": [\n            \"1 large chicken breast, cut into strips\",\n            \"2 cups spinach\",\n            \"1 sweet potato, spiralized into noodles\",\n            \"2 tablespoons hoisin sauce\",\n            \"1 tablespoon soy sauce\",\n            \"2 teaspoons chili sauce (optional)\",\n            \"2 cloves garlic, minced\",\n            \"1 tablespoon ginger, minced\",\n            \"1 tablespoon peanut oil (or any other cooking oil if allergic to peanuts)\",\n            \"Salt to taste\",\n            \"Sesame seeds for garnish\"\n        ],\n        \"procedure\": [\n            \"Heat the oil in a large pan over medium heat.\",\n            \"Add garlic and ginger to the pan and sauté until fragrant.\",\n            \"Add chicken strips and cook until they turn golden and are cooked through.\",\n            \"Toss in the spiralized sweet potato noodles and cook for about 3-4 minutes, until just tender.\",\n            \"Add the spinach and cook until wilted.\",\n            \"Pour in the hoisin sauce, soy sauce, and chili sauce, mixing well to coat all ingredients.\",\n            \"Cook for an additional 2 minutes, letting the flavors blend together.\",\n            \"Season with salt, garnish with sesame seeds, and serve.\"\n        ]\n    },\n    {\n        \"dish name\": \"Chinese Spiced Chicken with Sweet Potato\",\n        \"items\": [\n            \"1 large chicken breast, thinly sliced\",\n            \"1 large sweet potato, peeled and diced\",\n            \"2 cups spinach\",\n            \"2 tablespoons Chinese five-spice powder\",\n            \"1 tablespoon soy sauce\",\n            \"2 tablespoons vegetable oil\",\n            \"1 teaspoon honey\",\n            \"1 tablespoon rice vinegar\",\n            \"Salt and pepper to taste\"\n        ],\n        \"procedure\": [\n            \"Heat oil in a large skillet over medium-high heat.\",\n            \"Add the sliced chicken breast and Chinese five-spice powder, stir to coat well.\",\n            \"Cook the chicken until it begins to brown, about 5-7 minutes.\",\n            \"Add the diced sweet potato and cook for about 10 minutes or until soft.\",\n            \"Mix in the spinach and cook until wilted.\",\n            \"Stir in soy sauce, honey, and rice vinegar, and cook for another 2-3 minutes until everything is well combined and heated through.\",\n            \"Season with salt and pepper to taste.\",\n            \"Serve immediately.\"\n        ]\n    }\n ]\n```"
const trimmedjsonString = jsonString.slice(8, -3);
console.log(trimmedjsonString)
const recipes = JSON.parse(trimmedjsonString);
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe';

    const title = document.createElement('h2');
    title.textContent = recipe["dish name"];
    card.appendChild(title);

    const itemsList = document.createElement('ul');
    for (const [item, amount] of Object.entries(recipe.items)) {
        const li = document.createElement('li');
        li.textContent = `${item}: ${amount}`;
        itemsList.appendChild(li);
    }
    card.appendChild(itemsList);

    const procedure = document.createElement('p');
    procedure.textContent = recipe.procedure;
    card.appendChild(procedure);

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
    copyButton.onclick = () => copyRecipe(recipe);
    buttonGroup.appendChild(copyButton);

    const bookmarkButton = document.createElement('button');
    bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i> Bookmark';
    bookmarkButton.onclick = () => bookmarkRecipe(recipe["dish name"]);
    buttonGroup.appendChild(bookmarkButton);

    card.appendChild(buttonGroup);

    return card;
}

function copyRecipe(recipe) {
    const recipeText = `
        ${recipe["dish name"]}

        Ingredients:
        ${Object.entries(recipe.items).map(([item, amount]) => `${item}: ${amount}`).join('\n')}

        Procedure:
        ${recipe.procedure}
    `;
    navigator.clipboard.writeText(recipeText).then(() => {
        alert('Recipe copied to clipboard!');
    });
}

function bookmarkRecipe(recipeName) {
    // In a real application, you would save this to local storage or a database
    alert(`${recipeName} has been bookmarked!`);
}

const container = document.getElementById('recipeContainer');
recipes.forEach(recipe => {
    container.appendChild(createRecipeCard(recipe));
});