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
    if (!selectedCuisines.has(cuisine)) {
        selectedCuisines.add(cuisine);
        updateSelectedListCuisines();
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