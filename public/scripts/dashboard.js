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

 // Previous JavaScript content remains exactly the same
 const ingredients = [
    'Chicken Breast', 'Salmon', 'Spinach', 'Broccoli', 'Sweet Potato',
    'Quinoa', 'Brown Rice', 'Eggs', 'Greek Yogurt', 'Avocado',
    'Almonds', 'Olive Oil', 'Banana', 'Blueberries', 'Oats',
    'Cottage Cheese', 'Kale', 'Lentils', 'Black Beans', 'Tofu',
    'Turkey', 'Tuna', 'Chickpeas', 'Bell Peppers', 'Chia Seeds'
];

const selectedIngredients = new Set();
let visibleIngredients = 10;
let isCollapsed = false;

function toggleCollapse() {
    const collapseBtn = document.getElementById('collapseBtn');
    isCollapsed = !isCollapsed;
    
    if (isCollapsed) {
        visibleIngredients = 10;
        collapseBtn.classList.add('collapsed');
        collapseBtn.innerHTML = '<span class="icon">▼</span> Expand';
    } else {
        collapseBtn.classList.remove('collapsed');
        collapseBtn.innerHTML = '<span class="icon">▼</span> Collapse';
    }
    
    if (!document.querySelector('.search-box').value) {
        initializeIngredients();
    } else {
        filterIngredients();
    }
}

function initializeIngredients() {
    const availableList = document.getElementById('availableList');
    availableList.innerHTML = '';
    
    ingredients.slice(0, visibleIngredients).forEach(ingredient => {
        const li = createIngredientItem(ingredient);
        availableList.appendChild(li);
    });

    updateShowMoreButton();
}

function updateShowMoreButton() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (visibleIngredients >= ingredients.length || isCollapsed) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block';
    }
}

function showMoreIngredients() {
    visibleIngredients += 10;
    if (!document.querySelector('.search-box').value) {
        initializeIngredients();
    } else {
        filterIngredients();
    }
}

function createIngredientItem(ingredient) {
    const li = document.createElement('li');
    li.className = 'ingredient-item';
    li.textContent = ingredient;
    li.onclick = () => selectIngredient(ingredient);
    return li;
}

function selectIngredient(ingredient) {
    if (!selectedIngredients.has(ingredient)) {
        selectedIngredients.add(ingredient);
        updateSelectedList();
    }
}

function updateSelectedList() {
    const selectedList = document.getElementById('selectedList');
    selectedList.innerHTML = '';
    
    selectedIngredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.className = 'ingredient-item selected-ingredient';
        
        const span = document.createElement('span');
        span.textContent = ingredient;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '×';
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            removeIngredient(ingredient);
        };
        
        li.appendChild(span);
        li.appendChild(removeBtn);
        selectedList.appendChild(li);
    });
}

function removeIngredient(ingredient) {
    selectedIngredients.delete(ingredient);
    updateSelectedList();
}

function filterIngredients() {
    const searchText = document.querySelector('.search-box').value.toLowerCase();
    const availableList = document.getElementById('availableList');
    availableList.innerHTML = '';
    
    const filteredIngredients = ingredients
        .filter(ingredient => ingredient.toLowerCase().includes(searchText));
    
    const displayCount = isCollapsed ? Math.min(10, visibleIngredients) : visibleIngredients;
    
    filteredIngredients
        .slice(0, displayCount)
        .forEach(ingredient => {
            const li = createIngredientItem(ingredient);
            availableList.appendChild(li);
        });

    const showMoreBtn = document.getElementById('showMoreBtn');
    showMoreBtn.style.display = 
        (filteredIngredients.length > visibleIngredients && !isCollapsed) ? 'block' : 'none';
}


const allergies = [
    "peanuts","shellfish","dairy","gluten","eggs","soy","wheat","tree nuts","fish",
"sesame","mustard","corn","bee stings","latex","pollen","dust mites","animal dander",
    "mold","certain medications","perfumes/fragrances"
];

const selectedAllergies = new Set();
let visibleAllergies = 10;
let isCollapsedAllergies = false;

function toggleCollapseAllergies() {
    const collapseBtn = document.getElementById('collapseBtnAllergies');
    isCollapsed = !isCollapsed;
    
    if (isCollapsed) {
        visibleAllergies = 10;
        collapseBtn.classList.add('collapsed');
        collapseBtn.innerHTML = '<span class="icon">▼</span> Expand';
    } else {
        collapseBtn.classList.remove('collapsed');
        collapseBtn.innerHTML = '<span class="icon">▼</span> Collapse';
    }
    
    if (!document.querySelector('.search-box-allergies').value) {
        initializeAllergies();
    } else {
        filterAllergies();
    }
}

function initializeAllergies() {
    const availableListAllergies = document.getElementById('availableListAllergies');
    availableListAllergies.innerHTML = '';
    
    allergies.slice(0, visibleAllergies).forEach(allergy => {
        const li = createAllergyItem(allergy);
        availableListAllergies.appendChild(li);
    });

    updateShowMoreButtonAllergies();
}

function updateShowMoreButtonAllergies() {
    const showMoreBtn = document.getElementById('showMoreBtnAllergies');
    if (visibleAllergies >= allergies.length || isCollapsed) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block';
    }
}

function showMoreAllergies() {
    visibleAllergies += 10;
    if (!document.querySelector('.search-box-allergies').value) {
        initializeAllergies();
    } else {
        filterAllergies();
    }
}

function createAllergyItem(allergy) {
    const li = document.createElement('li');
    li.className = 'allergy-item';
    li.textContent = allergy;
    li.onclick = () => selectAllergy(allergy);
    return li;
}

function selectAllergy(allergy) {
    if (!selectedAllergies.has(allergy)) {
        selectedAllergies.add(allergy);
        updateSelectedListAllergies();
    }
}

function updateSelectedListAllergies() {
    const selectedListAllergies = document.getElementById('selectedListAllergies');
    selectedListAllergies.innerHTML = '';
    
    selectedAllergies.forEach(allergy => {
        const liAllergies = document.createElement('li');
        liAllergies.className = 'allergy-item selected-allergy';
        
        const span = document.createElement('span');
        span.textContent = allergy;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '×';
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            removeAllergy(allergy);
        };
        
        liAllergies.appendChild(span);
        liAllergies.appendChild(removeBtn);
        selectedListAllergies.appendChild(liAllergies);
    });
}

function removeAllergy(allergy) {
    selectedAllergies.delete(allergy);
    updateSelectedListAllergies();
}

function filterAllergies() {
    const searchText = document.querySelector('.search-box-allergies').value.toLowerCase();
    const availableListAllergies = document.getElementById('availableListAllergies');
    availableListAllergies.innerHTML = '';
    
    const filteredAllergies = allergies
        .filter(allergy => allergy.toLowerCase().includes(searchText));
    
    const displayCount = isCollapsedAllergies ? Math.min(10, visibleAllergies) : visibleAllergies;
    
    filteredAllergies
        .slice(0, displayCount)
        .forEach(allergy => {
            const li = createAllergyItem(allergy);
            availableListAllergies.appendChild(li);
        });

    const showMoreBtn = document.getElementById('showMoreBtnAllergies');
    showMoreBtn.style.display = 
        (filteredAllergies.length > visibleAllergies && !isCollapsed) ? 'block' : 'none';
}



const cuisines = ["Italian", "Chinese", "Indian", "Mexican", "French", "Japanese", "Thai", "Greek", "Spanish", "Korean", "Vietnamese", "Turkish", "Brazilian", "Moroccan", "Lebanese", "Ethiopian", "Caribbean", "German", "American", "Argentinian", "Persian", "Russian", "Cuban", "Malaysian", "Indonesian", "Filipino", "Pakistani", "Sri Lankan", "Egyptian", "Portuguese", "South African", "Swedish", "Polish", "Hungarian", "Armenian", "Israeli", "Nepalese", "Burmese", "Bavarian", "Hawaiian", "Chilean", "Peruvian", "Tibetan", "Belgian", "Ukrainian", "Austrian", "Jamaican", "Finnish", "Colombian", "Saudi Arabian", "Iraqi", "Syrian", "Afghan", "Bangladeshi", "Singaporean", "Cambodian", "Mongolian", "Swiss", "Tunisian", "Nigerian", "Kenyan", "Ghanaian", "Sudanese", "Algerian", "Jordanian", "Georgian", "Uzbek", "Kazakh", "Somali", "Palestinian", "Belarusian", "Venezuelan", "Ecuadorian", "Bolivian", "Madagascan", "Trinidadian", "New Zealand", "Australian", "Dutch", "Czech", "Slovak", "Bosnian", "Croatian", "Serbian", "Macedonian", "Montenegrin", "Slovenian", "Icelandic", "Norwegian", "Danish"];

const selectedCuisines = new Set();
let visibleCuisines = 10;
let isCollapsedCuisines = false;

function toggleCollapseCuisines() {
    const collapseBtn = document.getElementById('collapseBtnCuisines');
    isCollapsed = !isCollapsed;
    
    if (isCollapsed) {
        visibleCuisines = 10;
        collapseBtn.classList.add('collapsed');
        collapseBtn.innerHTML = '<span class="icon">▼</span> Expand';
    } else {
        collapseBtn.classList.remove('collapsed');
        collapseBtn.innerHTML = '<span class="icon">▼</span> Collapse';
    }
    
    if (!document.querySelector('.search-box-cuisines').value) {
        initializeCuisines();
    } else {
        filterCuisines();
    }
}

function initializeCuisines() {
    const availableListCuisines = document.getElementById('availableListCuisines');
    availableListCuisines.innerHTML = '';
    
    cuisines.slice(0, visibleCuisines).forEach(cuisine => {
        const li = createCuisineItem(cuisine);
        availableListCuisines.appendChild(li);
    });

    updateShowMoreButtonCuisines();
}

function updateShowMoreButtonCuisines() {
    const showMoreBtn = document.getElementById('showMoreBtnCuisines');
    if (visibleCuisines >= cuisines.length || isCollapsed) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block';
    }
}

function showMoreCuisines() {
    visibleCuisines += 10;
    if (!document.querySelector('.search-box-cuisines').value) {
        initializeCuisines();
    } else {
        filterCuisines();
    }
}

function createCuisineItem(cuisine) {
    const li = document.createElement('li');
    li.className = 'cuisine-item';
    li.textContent = cuisine;
    li.onclick = () => selectCuisine(cuisine);
    return li;
}

function selectCuisine(cuisine) {

    // if (!selectedCuisines.has(cuisine)) {
    //     selectedCuisines.add(cuisine);
    //     updateSelectedListCuisines();
    // }

    if(selectedCuisines.size == 0){
        selectedCuisines.add(cuisine);
        updateSelectedListCuisines();
    } else{
        alert('Only one cuisine allowed to select!')
    }
}

function updateSelectedListCuisines() {
    const selectedListCuisines = document.getElementById('selectedListCuisines');
    selectedListCuisines.innerHTML = '';
    
    selectedCuisines.forEach(cuisine => {
        const liCuisines = document.createElement('li');
        liCuisines.className = 'cuisine-item selected-cuisine';
        
        const span = document.createElement('span');
        span.textContent = cuisine;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '×';
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            removeCuisine(cuisine);
        };
        
        liCuisines.appendChild(span);
        liCuisines.appendChild(removeBtn);
        selectedListCuisines.appendChild(liCuisines);
    });
}

function removeCuisine(cuisine) {
    selectedCuisines.delete(cuisine);
    updateSelectedListCuisines();
}

function filterCuisines() {
    const searchText = document.querySelector('.search-box-cuisines').value.toLowerCase();
    const availableListCuisines = document.getElementById('availableListCuisines');
    availableListCuisines.innerHTML = '';
    
    const filteredCuisines = cuisines
        .filter(cuisine => cuisine.toLowerCase().includes(searchText));
    
    const displayCount = isCollapsedCuisines ? Math.min(10, visibleCuisines) : visibleCuisines;
    
    filteredCuisines
        .slice(0, displayCount)
        .forEach(cuisine => {
            const li = createCuisineItem(cuisine);
            availableListCuisines.appendChild(li);
        });

    const showMoreBtn = document.getElementById('showMoreBtnCuisines');
    showMoreBtn.style.display = 
        (filteredCuisines.length > visibleCuisines && !isCollapsed) ? 'block' : 'none';
}



initializeIngredients();
initializeAllergies();
initializeCuisines();



//recipe-section


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

function generateRecipe(){


    if (selectedIngredients.size < 3){
        alert('Select Atleast 3 Ingredients')
    } else if (selectedCuisines.size == 0){
        alert('Select Any Cuisine')
    } else {
        let selectedAllergiesStr = 'none'
        if (selectedAllergies.size > 0){
            selectedAllergiesStr = Array.from(selectedAllergies).join(', ')
        }
        const selectedCuisinesStr = Array.from(selectedCuisines).join(', ')
        const selectedIngredientsStr = Array.from(selectedIngredients).join(', ')
        const data = {messege: `ingredients: ${selectedIngredientsStr}. allergies: ${selectedAllergiesStr}. cuisine: ${selectedCuisinesStr}. create a json with parameters: 'dish name', 'items', 'procedure'. only code and no other text. give 3 dishes.`}
        const body = JSON.stringify(data)

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/generate-recipe", true);
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseText.data
            // console.log(response)
            const trimmedresponse = response.slice(8, -3);
            const recipes = JSON.parse(trimmedresponse);

            const container = document.getElementById('recipeContainer');
            recipes.forEach(recipe => {
                container.appendChild(createRecipeCard(recipe));
            });
        } else {
            console.log(`Error: ${xhr.status}`);
        }
        };
        xhr.send(body);
    }
    
}


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
    copyButton.className = 'recipe-btn'
    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
    copyButton.onclick = () => copyRecipe(recipe);
    buttonGroup.appendChild(copyButton);

    const bookmarkButton = document.createElement('button');
    bookmarkButton.className = 'recipe-btn'
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

