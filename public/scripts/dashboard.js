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
    // Vegetables
    "Tomato", "Potato", "Carrot", "Broccoli", "Spinach", "Kale", "Zucchini", "Cucumber", "Bell Pepper", 
    "Onion", "Garlic", "Ginger", "Lettuce", "Eggplant", "Cauliflower", "Asparagus", "Sweet Potato", 
    "Brussels Sprouts", "Green Beans", "Peas", "Cabbage", "Radish", "Beetroot", "Leek", "Turnip",

    // Fruits
    "Apple", "Banana", "Orange", "Strawberry", "Blueberry", "Grapes", "Mango", "Pineapple", "Watermelon",
    "Papaya", "Avocado", "Peach", "Plum", "Cherry", "Kiwi", "Pear", "Pomegranate", "Raspberry", "Blackberry",
    "Lemon", "Lime", "Coconut", "Dragon Fruit", "Passion Fruit", "Guava",

    // Grains and Legumes
    "Rice", "Wheat", "Barley", "Oats", "Quinoa", "Millet", "Chickpeas", "Lentils", "Black Beans", 
    "Kidney Beans", "Peas", "Soybeans", "Lupin Beans", "Adzuki Beans", "Buckwheat", "Corn", "Amaranth",

    // Dairy Products
    "Milk", "Cheese", "Yogurt", "Butter", "Cream", "Ghee", "Cottage Cheese", "Buttermilk", "Sour Cream",
    "Mozzarella", "Cheddar", "Feta", "Goat Cheese", "Parmesan", "Ricotta", "Swiss Cheese",

    // Meat and Poultry
    "Chicken", "Beef", "Pork", "Lamb", "Turkey", "Duck", "Bacon", "Ham", "Sausage", "Venison", 
    "Rabbit", "Goat", "Veal", "Quail", "Pheasant",

    // Fish and Seafood
    "Salmon", "Tuna", "Cod", "Shrimp", "Prawns", "Crab", "Lobster", "Oysters", "Clams", "Mussels", 
    "Sardines", "Anchovies", "Mackerel", "Tilapia", "Octopus", "Squid", "Sea Bass", "Trout",

    // Nuts and Seeds
    "Almonds", "Cashews", "Walnuts", "Pistachios", "Macadamia", "Sunflower Seeds", "Pumpkin Seeds", 
    "Chia Seeds", "Flax Seeds", "Sesame Seeds", "Hemp Seeds", "Brazil Nuts", "Pine Nuts", "Pecans", 

    // Oils and Fats
    "Olive Oil", "Coconut Oil", "Vegetable Oil", "Sunflower Oil", "Sesame Oil", "Peanut Oil", "Canola Oil", 
    "Avocado Oil", "Butter", "Ghee", "Lard", "Palm Oil",

    // Herbs and Spices
    "Basil", "Oregano", "Thyme", "Rosemary", "Parsley", "Cilantro", "Dill", "Mint", "Sage", 
    "Chives", "Tarragon", "Bay Leaves", "Cinnamon", "Nutmeg", "Cumin", "Coriander", "Turmeric", 
    "Paprika", "Black Pepper", "Cayenne Pepper", "Chili Powder", "Garam Masala", "Saffron", "Cardamom",
    "Fenugreek", "Mustard Seeds", "Fennel Seeds", "Caraway Seeds",

    // Sauces and Condiments
    "Ketchup", "Mustard", "Mayonnaise", "Soy Sauce", "Hot Sauce", "Barbecue Sauce", "Worcestershire Sauce", 
    "Vinegar", "Tahini", "Horseradish", "Sriracha", "Pesto", "Hummus", "Fish Sauce", "Oyster Sauce", "Tartar Sauce",

    // Sweeteners
    "Sugar", "Brown Sugar", "Honey", "Maple Syrup", "Molasses", "Agave Syrup", "Stevia", "Coconut Sugar", 
    "Date Syrup", "Corn Syrup", "Golden Syrup",

    // Baking Ingredients
    "Flour", "Baking Powder", "Baking Soda", "Yeast", "Cornstarch", "Gelatin", "Agar Agar", "Vanilla Extract", 
    "Cocoa Powder", "Chocolate Chips", "Brown Sugar", "Powdered Sugar", "Salt",

    // Beverages
    "Tea", "Coffee", "Juice", "Soda", "Milk", "Water", "Lemonade", "Smoothie", "Beer", "Wine", "Cider", 
    "Hot Chocolate",

    // Other
    "Tofu", "Tempeh", "Seitan", "Miso", "Soy Sauce", "Sriracha", "Kimchi", "Sauerkraut", "Pickles", 
    "Olives", "Capers", "Nori", "Mushrooms", "Truffles"
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
    // Common Allergies
    "Peanuts", "Tree Nuts", "Milk", "Eggs", "Fish", "Shellfish", "Wheat", "Soy", "Sesame",

    // Tree Nut Specific Allergies
    "Almonds", "Cashews", "Walnuts", "Hazelnuts", "Macadamia Nuts", "Pistachios", "Brazil Nuts", 
    "Pecans", "Pine Nuts",

    // Fish Specific Allergies
    "Salmon", "Tuna", "Cod", "Haddock", "Trout", "Mackerel", "Swordfish", "Anchovies", 
    "Sardines", "Bass",

    // Shellfish Specific Allergies
    "Shrimp", "Crab", "Lobster", "Clams", "Oysters", "Mussels", "Scallops", "Prawns", 
    "Crawfish",

    // Grains and Gluten Allergies
    "Wheat", "Barley", "Rye", "Oats", "Spelt", "Kamut", "Triticale", "Semolina", 
    "Durum Wheat", "Gluten",

    // Fruit Allergies
    "Apple", "Peach", "Cherry", "Strawberry", "Kiwi", "Banana", "Avocado", "Mango", 
    "Pineapple", "Grapes", "Watermelon", "Cantaloupe", "Papaya",

    // Vegetable Allergies
    "Tomato", "Potato", "Carrot", "Celery", "Spinach", "Cucumber", "Zucchini", "Peppers", 
    "Lettuce", "Garlic", "Onion", "Pumpkin", "Eggplant",

    // Legume Allergies
    "Soy", "Lentils", "Chickpeas", "Peas", "Kidney Beans", "Black Beans", "Lupin Beans", 
    "Green Beans", "Peanuts", 

    // Seed Allergies
    "Sesame", "Sunflower Seeds", "Poppy Seeds", "Pumpkin Seeds", "Flax Seeds", "Chia Seeds", 
    "Hemp Seeds", "Mustard Seeds", 

    // Dairy Allergies
    "Cow’s Milk", "Goat’s Milk", "Sheep’s Milk", "Lactose", "Casein", "Whey Protein",

    // Meat and Poultry Allergies
    "Chicken", "Beef", "Pork", "Lamb", "Turkey", "Duck", "Rabbit", "Goat", 
    "Venison", "Quail", "Horse Meat", 

    // Spice Allergies
    "Coriander", "Cumin", "Turmeric", "Paprika", "Cinnamon", "Nutmeg", "Black Pepper", 
    "Saffron", "Ginger", "Garlic", "Mustard", "Fennel", "Cardamom", 

    // Rare Allergies
    "Corn", "Rice", "Gelatin", "Coconut", "Chocolate", "Vanilla", "Honey", 
    "Aspartame", "MSG (Monosodium Glutamate)", "Balsam of Peru", "Food Colorings (e.g., Red 40)", 
    "Sulfites", "Benzoates", "Tartrazine (Yellow 5)", "Shellac", 

    // Cross-Reactive Allergies (Oral Allergy Syndrome)
    "Birch Pollen (cross-reacts with apples, carrots, celery, peaches)", 
    "Ragweed Pollen (cross-reacts with bananas, melons)", 
    "Grass Pollen (cross-reacts with tomatoes, potatoes, peaches)",

    // Additives and Preservative Allergies
    "Sulfites", "Benzoates", "Nitrates", "Nitrites", "Tartrazine (Yellow 5)", 
    "Carmine", "Aspartame", "MSG (Monosodium Glutamate)", 

    // Other Specific Ingredients
    "Gluten", "Lactose", "Casein", "Egg Whites", "Egg Yolks", "Yeast", 
    "Glycerin", "Maltodextrin", "Corn Starch", "Soy Lecithin", 

    // Alcohol and Fermented Product Allergies
    "Wine", "Beer", "Spirits", "Sake", "Vinegar", "Pickles", 
    "Kombucha", "Sauerkraut", "Miso", "Kimchi", "Tempeh",

    // Uncommon Plant Allergies
    "Cocoa", "Tea", "Coffee", "Herbs like Basil, Oregano, Parsley", "Spinach", "Rhubarb", "Artichoke",

    // Animal Protein Allergies
    "Gelatin", "Albumin", "Fish Protein", "Chicken Protein", "Meat Protein", 

    // Miscellaneous Allergies
    "Chia Seeds", "Pineapple Enzymes (Bromelain)", "Latex-Fruit Syndrome (Banana, Avocado, Kiwi)", 
    "Salicylates", "Lupin", "Carrageenan", "Pectin", "Quorn (Mycoprotein)",
    "Alpha-gal (linked to red meat from tick bites)"
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
            const response = xhr.responseText
            const parsedResponse = JSON.parse(response)
            const data = parsedResponse.data.content
            console.log(data)
            const trimmedData = data.slice(8, -3);
            const recipes = JSON.parse(trimmedData);

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
    title.textContent = recipe["dish_name"];
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

