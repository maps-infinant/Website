const homeTab = document.getElementById('homeTab');
const ingredientsTab = document.getElementById('ingredientsTab');
const homeContent = document.getElementById('home');
const ingredientsContent = document.getElementById('ingredients');
const preferencesBtn = document.getElementById('preferencesBtn');
const preferences = document.getElementById('preferences');
const preferencesSaveBtn = document.getElementById('preferencesSaveBtn');

homeTab.addEventListener('click', () => {
    homeTab.classList.add('selected');
    ingredientsTab.classList.remove('selected');
    homeContent.classList.remove('hidden');
    ingredientsContent.classList.add('hidden');
});

ingredientsTab.addEventListener('click', () => {
    homeTab.classList.remove('selected');
    ingredientsTab.classList.add('selected');
    homeContent.classList.add('hidden');
    ingredientsContent.classList.remove('hidden');
});

preferencesBtn.addEventListener('click', () => {
    preferences.classList.remove('hidden');
    overlay.style.display = 'block';
});

const numPeople = document.getElementById("numPeople");
const maxPrepTime = document.getElementById("maxPrepTime");

// Populate number of people dropdown
for (let i = 1; i <= 15; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    numPeople.add(option);
}

// Populate max prep time dropdown
for (let i = 15; i <= 180; i += 15) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i + " minutes";
    maxPrepTime.add(option);
}

// Meal type buttons
const mealTypeBtns = document.getElementsByClassName('mealTypeBtn');
for (const btn of mealTypeBtns) {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
    });
}


const overlay = document.getElementById('overlay');

preferencesSaveBtn.addEventListener('click', () => {
    preferences.classList.add('hidden');
    overlay.style.display = 'none';
});

const groceryList = document.getElementById('groceryList');

const sampleIngredients = [
    { name: 'Chicken breasts', isChecked: false },
    { name: 'Mixed greens', isChecked: false },
    { name: 'Cherry tomatoes', isChecked: false },
    { name: 'Cucumber', isChecked: false },
{ name: 'Red onion', isChecked: false },
{ name: 'Bell pepper', isChecked: false },
{ name: 'Tofu', isChecked: false },
{ name: 'Broccoli', isChecked: false },
{ name: 'Carrots', isChecked: false },
{ name: 'Soy sauce', isChecked: false },
{ name: 'Sesame oil', isChecked: false },
{ name: 'Brown rice', isChecked: false },
{ name: 'Spaghetti', isChecked: false },
{ name: 'Ground beef', isChecked: false },
{ name: 'Marinara sauce', isChecked: false },
{ name: 'Parmesan cheese', isChecked: false },
{ name: 'Quinoa', isChecked: false },
{ name: 'Black beans', isChecked: false },
{ name: 'Taco shells', isChecked: false },
{ name: 'Salsa', isChecked: false },
{ name: 'Avocado', isChecked: false },
{ name: 'Salmon', isChecked: false },
{ name: 'Teriyaki sauce', isChecked: false },
{ name: 'Green onions', isChecked: false },
{ name: 'Sesame seeds', isChecked: false }
];

function populateGroceryList() {
    groceryList.innerHTML = sampleIngredients.map((ingredient, index) => {
        return `
            <li>
                <input type="checkbox" id="ingredient-${index}" ${ingredient.isChecked ? 'checked' : ''}>
                <label for="ingredient-${index}">
                    ${ingredient.name}
                </label>
            </li>
        `;
    }).join('');
    addCheckboxListeners();
}

function addCheckboxListeners() {
    const checkboxes = groceryList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            sampleIngredients[index].isChecked = checkbox.checked;
        });
    });
}

const preferenceButtons = document.querySelectorAll('.preference-button');

preferenceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});

populateGroceryList();
addCheckboxListeners();

window.addEventListener('error', (event) => {
    console.error('Error:', event.message, 'in file', event.filename, 'at line', event.lineno);
});
