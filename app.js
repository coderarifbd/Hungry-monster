document.getElementById("country-search").addEventListener("click", function () {
    const country = document.getElementById("country").value
    getFoodList(country)
})

function getFoodList(country) {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+country+'')
        .then(res => res.json())
        .then(data => getMealList(data))

    const getMealList = meals => {
        const mealList = meals.meals
        const foodList = document.getElementById("food-list")
        for (let i = 0; i < mealList.length; i++) {
            const food = mealList[i]
            const foodName = mealList[i].strMeal
            const foodImg = mealList[i].strMealThumb
            const li = document.createElement("li")
            const img = document.createElement("img")
            img.setAttribute("src", `${foodImg}`)
            const h3 = document.createElement("h3")
            h3.innerText = foodName
            li.appendChild(img)
            li.appendChild(h3)
            foodList.appendChild(li)

            // console.log(foodName)
        }
        // console.log(mealList[1]);

    }
}