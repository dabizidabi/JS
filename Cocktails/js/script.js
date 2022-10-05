window.addEventListener('DOMContentLoaded', async function() {
    console.clear
    class RecipeCard {
        constructor({ name, category, drinkIba, glass, instructions, drinkImg, ingredients }, parentSelector) {
            this.name = name;
            this.category = category;
            this.drinkIba = drinkIba || "None";
            this.glass = glass;
            this.instructions = instructions;
            this.drinkImg = drinkImg;
            this.ingredients = Object.values(ingredients).slice(11, 16).reduce((prev, curr) => {
                if (curr) return prev + " " + curr;
                return prev;
            }, "");
            this.parent = document.querySelector(parentSelector);
        }


        render() {
            const element = document.createElement('figure');
            element.classList.add('cocktail-cards');

            element.innerHTML = `
            <img src=${this.drinkImg} alt="movie_img">
            <figcaption>
                <ul>
                    <li class="imgs-like-container">Name: ${this.name}
                        <div class="like"></div>
                    </li>
                    <li>Category: ${this.category}</li>
                    <li>Drink IBA: ${this.drinkIba}</li> 
                    <li>Glass: ${this.glass}</li>  
                    <liа> 
                        <a class="instructions" href="">Instructions</a>
                        <div class="instructions-descript">${this.instructions}</div>
                    </li>
                    <li>
                        <a class="ingredients" href="">Ingredients</a>
                        <div class="ingredients-descript">${this.ingredients}</div> 
                    </li>
                <ul>
            </figcaption>
            `;

            this.parent.append(element);
        }
    }

    //Show Drinks Cards
    async function getResourceData(url) {
        let result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }
        return await result.json();
    }

    await getResourceData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
        .then(data => {
            data.drinks.forEach(({ strDrink: name, strCategory: category, strIBA: drinkIba, strGlass: glass, strInstructions: instructions, strDrinkThumb: drinkImg, ...ingredients }) => {
                new RecipeCard({ name, category, drinkIba, glass, instructions, drinkImg, ingredients }, ".cocktails-flexbox").render();
            });
        });

    //Open Close additional information
    const drinkCard = document.querySelectorAll(".cocktail-cards");

    function changeClass(element, classFrom, classTo) {
        if (element.classList == classFrom) {
            element.classList.add(classTo);
            element.classList.remove(classFrom);
        } else {
            element.classList.add(classFrom)
            element.classList.remove(classTo)
        }
    }

    drinkCard.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            let instDescript = event.currentTarget.querySelector(".instructions-descript, .instructions-descript-active");
            let ingDescript = event.currentTarget.querySelector(".ingredients-descript, .ingredients-descript-active");

            if (event.target.className === "instructions") {
                console.log()
                changeClass(instDescript, "instructions-descript", "instructions-descript-active");
            }
            if (event.target.className === "ingredients") {
                changeClass(ingDescript, "ingredients-descript", "ingredients-descript-active");
            }
        });
    });
});