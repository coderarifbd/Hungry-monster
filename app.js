document.getElementById("submit").addEventListener("click", function () {
    const area = document.getElementById("area").value
    getAreaWiseFoodList(area)
})


function getAreaWiseFoodList(area) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${area}`)
        .then(res => res.json())
        .then(data => displayFood(data.meals))

    function displayFood(foods) {
        // console.log(foods)
        const ul = document.getElementById("food-list")
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const li = document.createElement("li")
            li.innerHTML = `
            <button id="food-details" onclick="foodDetails(${food.idMeal})">
                <img class="food-image" src="${food.strMealThumb}">
                <h1 class="food-name">${food.strMeal}</h1>
            </button>
        `
            ul.appendChild(li)
            // console.log(food)
        }
    }
}
const foodDetails = id => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => singleDetails(data.meals[0]))

    function singleDetails(name) {
        const imgUrl = name.strMealThumb
        const foodName = name.strMeal
        const ingredients = [name.strIngredient1, name.strIngredient2, name.strIngredient3, name.strIngredient4, name.strIngredient5, name.strIngredient6, name.strIngredient7, name.strIngredient8, name.strIngredient9, name.strIngredient10, name.strIngredient11, name.strIngredient12, name.strIngredient13, name.strIngredient14, name.strIngredient15, name.strIngredient16, name.strIngredient17, name.strIngredient18, name.strIngredient19, name.strIngredient20]

        const singleDetailsContainer = document.getElementById("single-food-details")
        singleDetailsContainer.innerHTML = `
            <span id="hide">Close</span>
            <img src="${imgUrl}">
            <h1>${foodName}</h1>
            <h3 style="text-decoration: underline">Ingredients</h3>
            <ul id="ingredients-list">
            </ul>
        `
        const ingredientsList = document.getElementById("ingredients-list")
        for (let i = 0; i < ingredients.length; i++) {
            const ingredientsItem = ingredients[i];
            const li = document.createElement("li")
            if (ingredientsItem == '') {
                continue;
                3
            }
            li.innerText = ingredientsItem
            ingredientsList.appendChild(li)
        }
        document.getElementById("single-food-details").style.display = "block"
        document.getElementById("hide").addEventListener("click", function () {
            document.getElementById("single-food-details").style.display = "none"
        })
    }
}