window.addEventListener('DOMContentLoaded', async function() {

    //Auth to API
    const credentials = {
        clientId: "c63t0sc45x0lpjyh3dyn5nvzxvkn6n",
        clientSecret: "jzy0to8yr14y2jvvlo951jr7m92o68",
        grantType: "client_credentials"
    }

    const urlParams = new URLSearchParams({ client_id: credentials.clientId, client_secret: credentials.clientSecret, grant_type: credentials.grantType }),
        requestUrl = `https://id.twitch.tv/oauth2/token?${urlParams}`;

    async function getAuthToken(url) {
        let result = await fetch(url, {
            method: "POST",
        });

        if (!result.ok) {
            let response = JSON.stringify(await result.json());
            throw new Error(`Could not fetch ${url}, status ${response}`);
        }

        return await result.json();
    }

    async function getGamesData(accessToken, clientId, url, bodyRequest) {
        let someData = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain',
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            },
            body: bodyRequest,
            redirect: "follow"
        });

        if (!someData.ok) {
            let response = JSON.stringify(await someData.json());
            throw new Error(`Could not fetch ${url}, status ${response}`);
        }
        return await someData.json();
    }

    const { access_token: accessToken } = await getAuthToken(requestUrl);
    const gamesDataDefault = await getGamesData(accessToken, credentials.clientId, "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games", "fields *; limit 12; sort rating desc;");

    //take & add Game's image to gamesData
    async function composeGamesFinalArr(gamesData) {
        let mainGameArr = await Promise.all(gamesData.map(async(element) => {
            const coversData = await getGamesData(accessToken, credentials.clientId, "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/covers", `fields *; limit 1; where game = ${element.id};`);
            if (coversData.length === 0) {
                coversData.push({ url: "//images.igdb.com/igdb/image/upload/t_cover_big/nocover.png" });
            }

            element.image = coversData[0].url.replace('t_thumb', 't_cover_big'); //change image size

            return element;
        }));
        return mainGameArr;
    }

    //Games card
    class GamesCard {
        constructor({ gameName, image, firstReleaseDate, slug, url, summary }, parent_selector) {
            this.gameName = gameName;
            this.image = image;
            this.firstReleaseDate = new Date(firstReleaseDate * 1000).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });
            this.slug = slug;
            this.url = url;
            this.summary = summary;
            this.parentElement = document.querySelector(parent_selector);
        }

        render() {
            const element = document.createElement('figure');
            element.classList.add('game-card');

            element.innerHTML = `
            <h3 class="game-name">${this.gameName}</h3>
            <img src=${this.image} alt="game_cover">
            <figcaption>
                <ul>
                    <li>Release date: <span class= "inner-text">${this.firstReleaseDate}</span></li>
                    <li>Slug: <span class= "inner-text">${this.slug}</span></li> 
                    <li>URL: 
                        <a href="${this.url}" target="_blank"><span class= "inner-text">${this.url}</span></a>
                    </li>  
                    <li>Summary: <span class= "inner-text">${this.summary}</span></li>
                <ul>
            </figcaption>
            `;

            this.parentElement.append(element);
        }
    }

    function renderGamesCards(gamesFinalObjArr) {
        gamesFinalObjArr.forEach(game => {
            new GamesCard({ gameName: game.name, image: game.image, firstReleaseDate: game.first_release_date, slug: game.slug, url: game.url, summary: game.summary }, '.games-flexbox').render()
        });
    }

    const gamesObjFinal = await composeGamesFinalArr(gamesDataDefault);
    renderGamesCards(gamesObjFinal);
});