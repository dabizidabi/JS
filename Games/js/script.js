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
    const gamesData = await getGamesData(accessToken, credentials.clientId, "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games", "fields *; limit 5;");

    console.log(gamesData)


    //take & add Game's image to gamesData
    const gamesObjFinal = await Promise.all(gamesData.map(async(element) => {
        const coversData = await getGamesData(accessToken, credentials.clientId, "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/covers", `fields *; limit 1; where game = ${element.id};`);
        console.log(coversData)
        if (coversData.length == 0) {
            coversData.push({ url: "//images.igdb.com/igdb/image/upload/t_cover_big/nocover.png" });
        }

        element.image = coversData[0].url.replace('t_thumb', 't_cover_big'); //change image size

        return element;
    }));

    console.log(gamesObjFinal)

    //Games card
    class GamesCard {
        constructor({ gameName, image, firstReleaseDate, slug, url, summary }, parent_selector) {
            this.gameName = gameName;
            this.image = image;
            this.firstReleaseDate = firstReleaseDate;
            this.slug = slug;
            this.url = url;
            this.summary = summary;
            this.parentElement = document.querySelector(parent_selector);
        }

        render() {
            const element = document.createElement('figure');
            element.classList.add('game-card');

            element.innerHTML = `
            <h2>${this.gameName}</h2>
            <img src=${this.image} alt="game_cover">
            <figcaption>
                <ul>
                    <li>Release date: ${this.firstReleaseDate}</li>
                    <li>Slug: ${this.slug}</li> 
                    <li>URL: ${this.url}</li>  
                    <li>Summary: ${this.summary}</li>
                <ul>
            </figcaption>
            `;

            this.parentElement.append(element);
        }
    }
    gamesObjFinal.forEach(game => {

        new GamesCard({ gameName: game.name, image: game.image, firstReleaseDate: game.firs_release_date, slug: game.slug, url: game.url, summary: game.summary }, '.games-flexbox').render()
    });

});