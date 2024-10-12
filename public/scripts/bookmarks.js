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


const recipes = [
    {
        "dish name": "Stir-fried Chicken with Capsicum",
        "items": {
            "chicken": "200g, sliced",
            "coriander": "fresh, chopped",
            "potato": "1 medium, diced and boiled",
            "garam masala": "1 tsp",
            "onions": "1 medium, thinly sliced",
            "turmeric powder": "1/2 tsp",
            "capsicum": "1 large, sliced",
            "oil": "2 tbsp",
            "salt": "to taste"
        },
        "procedure": "1. Heat oil in a wok and sauté onions until soft. 2. Add chicken slices and stir-fry until browned. 3. Add turmeric, garam masala, and salt. Stir well. 4. Add boiled potatoes and capsicum. Stir-fry for 5-7 minutes. 5. Garnish with fresh coriander and serve hot."
    },
    {
        "dish name": "Capsicum and Potato Stir-fry",
        "items": {
            "potato": "2 medium, diced and boiled",
            "coriander": "fresh, chopped",
            "garam masala": "1 tsp",
            "onions": "1 large, thinly sliced",
            "turmeric powder": "1/2 tsp",
            "capsicum": "2 large, sliced",
            "oil": "2 tbsp",
            "salt": "to taste"
        },
        "procedure": "1. Heat oil in a wok and sauté onions until translucent. 2. Add turmeric powder, garam masala, and salt. Mix well. 3. Add boiled potatoes and sliced capsicum. Stir-fry on high heat for 5 minutes. 4. Garnish with fresh coriander and serve immediately."
    },
    {
        "dish name": "Chicken and Capsicum Stir-fry",
        "items": {
            "chicken": "250g, sliced",
            "capsicum": "2 medium, sliced",
            "onions": "2 medium, sliced",
            "garam masala": "1 tsp",
            "turmeric powder": "1/2 tsp",
            "coriander": "fresh, chopped",
            "oil": "2 tbsp",
            "salt": "to taste"
        },
        "procedure": "1. Heat oil in a wok and fry onions until soft. 2. Add chicken and stir-fry until fully cooked. 3. Add turmeric, garam masala, and salt. Stir well. 4. Add sliced capsicum and stir-fry for 5-7 minutes. 5. Garnish with coriander and serve hot."
    }
];

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