window.addEventListener('DOMContentLoaded', async function() {
    console.clear
    class RecipeCard {
        constructor({ name, category, drinkIba, glass, instructions, drinkImg, ingredients }, parentSelector) {
            this.name = name;
            this.category = category || "only for paid subscription"
            this.drinkIba = drinkIba || "None";
            this.glass = glass || "only for paid subscription";
            this.instructions = instructions || "only for paid subscription";
            this.drinkImg = drinkImg;
            this.ingredients = Object.values(ingredients).slice(11, 16).reduce((prev, curr) => {
                if (curr) return prev + " " + curr
                return prev;
            }, "") || "only for paid subscription";
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
                        <div data-name='${this.name}' id="like-div" class="like like--active"></div>
                    </li>
                    <li>Category: ${this.category}</li>
                    <li>Drink IBA: ${this.drinkIba}</li> 
                    <li>Glass: ${this.glass}</li>  
                    <li> 
                        <a class="instructions" href="">Instructions</a>
                        <div class="instructions-descript instructions-descript--active">${this.instructions}</div>
                    </li>
                    <li>
                        <a class="ingredients" href="">Ingredients</a>
                        <div class="ingredients-descript ingredients-descript--active">${this.ingredients}</div> 
                    </li>
                <ul>
            </figcaption>
            `;

            this.parent.append(element);
        }
    }

    //Show Drinks Cards
    async function getResourceData(url) {
        try {
            const result = await fetch(url);
            return await result.json();
        } catch (error) {
            throw new Error(error);
        }
    }

    const defaultUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s';
    const cocktailsData = await getResourceData(defaultUrl);


    function drawCocktailsCards(arr, parentElement) {
        arr.drinks.forEach(({ strDrink: name, strCategory: category, strIBA: drinkIba, strGlass: glass, strInstructions: instructions, strDrinkThumb: drinkImg, ...ingredients }) => {
            new RecipeCard({ name, category, drinkIba, glass, instructions, drinkImg, ingredients }, parentElement).render();

            //displays active like if item not in localstorage
            if (localStorage.getItem(name) === name) {
                document.querySelector(`div[data-name="${name}"]`).classList.remove('like');
            }
        });
    }

    drawCocktailsCards(cocktailsData, ".cocktails-flexbox");

    //Show instructions/ingredients, likes
    function changeClass(element, className) {
        element.classList.toggle(className);
    }


    function showAddInfo(arr) {

        arr.forEach(e => {
            e.addEventListener('click', (event) => {
                event.preventDefault();
                const instDescript = event.currentTarget.querySelector(".instructions-descript, .instructions-descript--active");
                const ingDescript = event.currentTarget.querySelector(".ingredients-descript, .ingredients-descript--active");

                if (event.target.className === "instructions") {
                    changeClass(instDescript, "instructions-descript");
                }
                if (event.target.className === "ingredients") {
                    changeClass(ingDescript, "ingredients-descript");
                }
                if (event.target.id === "like-div") {
                    changeClass(event.target, "like");
                    //write into localsorage state of like's element
                    if (localStorage.getItem(event.target.getAttribute('data-name'))) {
                        localStorage.removeItem(event.target.getAttribute('data-name'));
                    } else {
                        localStorage.setItem(event.target.getAttribute('data-name'), event.target.getAttribute('data-name'));
                    }
                }
            });
        });
    }

    const drinkCard = document.querySelectorAll(".cocktail-cards");
    showAddInfo(drinkCard);

    //Search
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-bar");

    // let searchText
    searchForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        searchUrl = defaultUrl + `=${searchInput.value}`
        const drinkNewdata = await getResourceData(searchUrl);
        document.querySelectorAll(".cocktail-cards").forEach(e => {
            e.remove();
        }); //before render filtered Cards del previous
        if (!drinkNewdata.drinks) {
            const element = document.createElement('figure');
            element.classList.add('cocktail-not-found', 'cocktail-cards');
            element.innerHTML = "<p>Cocktail Not Found</p>";
            document.querySelector(".cocktails-flexbox").append(element)
            return
        }
        drawCocktailsCards(drinkNewdata, ".cocktails-flexbox");

        const drinkCardsNew = document.querySelectorAll(".cocktail-cards");
        showAddInfo(drinkCardsNew);
    });

    //nav buttons
    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach(btn => {
        btn.addEventListener("click", async(e) => {
            let link;
            if (e.target.className.includes("home-btn")) {
                link = defaultUrl;
            } else if (e.target.className.includes("alcoholic-btn")) {
                link = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
            } else if (e.target.className.includes("nonAlcoholic-btn")) {
                link = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
            } else if (e.target.className.includes("random-btn")) {
                link = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
            }
            searchInput.value = "";
            const drinksData = await getResourceData(link);
            document.querySelectorAll(".cocktail-cards").forEach(e => {
                e.remove();
            });
            drawCocktailsCards(drinksData, ".cocktails-flexbox");
            const drinksCards = document.querySelectorAll(".cocktail-cards");
            showAddInfo(drinksCards);
        });
    });
});