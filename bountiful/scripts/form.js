const fruiturl = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

async function getFruitData() {
    const response = await fetch(fruiturl);
    const data = await response.json();
    displayFruits(data);
}

getFruitData();

async function getNutrition() {
    const response = await fetch(fruiturl);
    const data = await response.json();
    displayNutrition(data);
}

function displayFruits(fruit) {
    const select1 = document.querySelector('select#fruit1');
    fruit.forEach((fruit) => {
        let option = document.createElement('option');
        option.textContent = `${fruit.name}`;
        option.calories = fruit.nutritions.calories;
        option.sugar = fruit.nutritions.sugar;
        option.carbohydrates = fruit.nutritions.carbohydrates;
        option.fat = fruit.nutritions.fat;
        option.protein = fruit.nutritions.protein;
        select1.appendChild(option);
    })
    const select2 = document.querySelector('select#fruit2');
    fruit.forEach((fruit) => {
        let option = document.createElement('option');
        option.textContent = `${fruit.name}`;
        option.calories = fruit.nutritions.calories;
        option.sugar = fruit.nutritions.sugar;
        option.carbohydrates = fruit.nutritions.carbohydrates;
        option.fat = fruit.nutritions.fat;
        option.protein = fruit.nutritions.protein;
        select2.appendChild(option);
    })
    const select3 = document.querySelector('select#fruit3');
    fruit.forEach((fruit) => {
        let option = document.createElement('option');
        option.textContent = `${fruit.name}`;
        option.calories = fruit.nutritions.calories;
        option.sugar = fruit.nutritions.sugar;
        option.carbohydrates = fruit.nutritions.carbohydrates;
        option.fat = fruit.nutritions.fat;
        option.protein = fruit.nutritions.protein;
        select3.appendChild(option);
    })
}

function displayNutrition(fruits) {
    let fruit1 = document.getElementById('fruit1').value;
    let fruit2 = document.getElementById('fruit2').value;
    let fruit3 = document.getElementById('fruit3').value;
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i].name == fruit1) {
            carbs = fruits[i].nutritions.carbohydrates;
            carbohydrates += carbs;
            pro = fruits[i].nutritions.protein;
            protein += pro;
            f = fruits[i].nutritions.fat;
            fat += f;
            sug = fruits[i].nutritions.sugar;
            sugar += sug;
            cals = fruits[i].nutritions.calories;
            calories += cals
        }
        if (fruits[i].name == fruit2) {
            carbs = fruits[i].nutritions.carbohydrates;
            carbohydrates += carbs;
            pro = fruits[i].nutritions.protein;
            protein += pro;
            f = fruits[i].nutritions.fat;
            fat += f;
            sug = fruits[i].nutritions.sugar;
            sugar += sug;
            cals = fruits[i].nutritions.calories;
            calories += cals
        }
        if (fruits[i].name == fruit3) {
            carbs = fruits[i].nutritions.carbohydrates;
            carbohydrates += carbs;
            pro = fruits[i].nutritions.protein;
            protein += pro;
            f = fruits[i].nutritions.fat;
            fat += f;
            sug = fruits[i].nutritions.sugar;
            sugar += sug;
            cals = fruits[i].nutritions.calories;
            calories += cals
        }
    }
    nutrition = `Carbohydrates: ${carbohydrates.toFixed(1)}g<br>Protein: ${protein.toFixed(1)}g<br>Fat: ${fat.toFixed(1)}g<br>Sugar: ${sugar.toFixed(1)}g<br>Calories: ${calories}`;
    displayDrink();
}

function displayDrink() {
    let fruit1 = document.getElementById('fruit1').value;
    let fruit2 = document.getElementById('fruit2').value;
    let fruit3 = document.getElementById('fruit3').value;
    let date = new Date();
    let currentDate = `Date of Order: ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    
    document.getElementById('drink-info').innerHTML = `${currentDate}<br><br><strong>User Information</strong><br>Name: ${document.getElementById("name").value}<br>Email: ${document.getElementById("email").value}<br>Phone: ${document.getElementById("phone").value}<br><br><strong>Drink Information</strong><br>Fruit: ${fruit1}, ${fruit2}, ${fruit3}<br>Special Instructions: ${document.getElementById("special").value}<br><br><strong>Nutrition Information</strong><br>${nutrition}`;
}