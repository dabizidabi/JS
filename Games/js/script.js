window.addEventListener('DOMContentLoaded', async function() {

    //Auth to API
    const credentials = {
        clientId: "c63t0sc45x0lpjyh3dyn5nvzxvkn6n",
        clientSecret: "jzy0to8yr14y2jvvlo951jr7m92o68",
        grantType: "client_credentials"
    }

    const gamesObjFinal = [{
            "id": 148930,
            "alternative_names": [
                63465
            ],
            "artworks": [
                33736
            ],
            "category": 0,
            "cover": 169077,
            "created_at": 1621959514,
            "external_games": [
                2052375,
                2057300
            ],
            "first_release_date": 1615593600,
            "genres": [
                13,
                15,
                31,
                32
            ],
            "name": "Bok-Bok: A Chicken Dating Sim",
            "platforms": [
                6
            ],
            "release_dates": [
                393745
            ],
            "screenshots": [
                463145,
                463148,
                463149,
                463151,
                463152
            ],
            "similar_games": [
                25311,
                26145,
                28277,
                33603,
                51577,
                65827,
                79134,
                87975,
                109339,
                113402
            ],
            "slug": "bok-bok-a-chicken-dating-sim",
            "summary": "Have you ever pondered what the romantic life of a chicken is like? Take the role of Henry Cock as you try and woo as many hens as you can! With a unique, never-before-seen puzzle concept, you'll soon lose track of time as you become the best chicken dater in the world!",
            "tags": [
                268435469,
                268435471,
                268435487,
                268435488
            ],
            "updated_at": 1664758819,
            "url": "https://www.igdb.com/games/bok-bok-a-chicken-dating-sim",
            "websites": [
                192858
            ],
            "checksum": "83e4d161-ea6d-43f3-468f-8ff3f4e0f3e7",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/co3mgl.jpg"
        },
        {
            "id": 40104,
            "category": 0,
            "created_at": 1498435200,
            "external_games": [
                20127,
                1988884
            ],
            "first_release_date": 536457600,
            "genres": [
                5
            ],
            "name": "Dogou Souken",
            "platforms": [
                52
            ],
            "release_dates": [
                91007
            ],
            "similar_games": [
                12364,
                27270,
                43367,
                103281,
                103292,
                103298,
                103301,
                105049,
                106805
            ],
            "slug": "dogou-souken",
            "summary": "An overhead-view shoot'em up game.",
            "tags": [
                268435461
            ],
            "updated_at": 1604620800,
            "url": "https://www.igdb.com/games/dogou-souken",
            "checksum": "5e7446ff-58d9-e744-f0d3-5e10241304c1",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/nocover.png"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        },
        {
            "id": 85031,
            "age_ratings": [
                37944
            ],
            "category": 0,
            "cover": 61466,
            "created_at": 1517392813,
            "external_games": [
                216805,
                1969751,
                2005770
            ],
            "first_release_date": 1404345600,
            "genres": [
                9
            ],
            "involved_companies": [
                130531,
                130532
            ],
            "name": "City Mysteries",
            "platforms": [
                37
            ],
            "release_dates": [
                138333
            ],
            "screenshots": [
                155025,
                155026,
                155027
            ],
            "similar_games": [
                10603,
                19222,
                25905,
                41349,
                86974,
                87507,
                88511,
                90788,
                95776,
                106992
            ],
            "slug": "city-mysteries",
            "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
            "tags": [
                268435465
            ],
            "updated_at": 1641425677,
            "url": "https://www.igdb.com/games/city-mysteries",
            "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870",
            "image": "//images.igdb.com/igdb/image/upload/t_cover_big/yektasaxw6l4ejte7ljb.jpg"
        }

    ]


    // const urlParams = new URLSearchParams({ client_id: credentials.clientId, client_secret: credentials.clientSecret, grant_type: credentials.grantType }),
    //     requestUrl = `https://id.twitch.tv/oauth2/token?${urlParams}`;

    // async function getAuthToken(url) {
    //     let result = await fetch(url, {
    //         method: "POST",
    //     });

    //     if (!result.ok) {
    //         let response = JSON.stringify(await result.json());
    //         throw new Error(`Could not fetch ${url}, status ${response}`);
    //     }

    //     return await result.json();
    // }

    // async function getGamesData(accessToken, clientId, url, bodyRequest) {
    //     let someData = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'text/plain',
    //             'Client-ID': clientId,
    //             'Authorization': `Bearer ${accessToken}`
    //         },
    //         body: bodyRequest,
    //         redirect: "follow"
    //     });

    //     if (!someData.ok) {
    //         let response = JSON.stringify(await someData.json());
    //         throw new Error(`Could not fetch ${url}, status ${response}`);
    //     }
    //     return await someData.json();
    // }

    // const { access_token: accessToken } = await getAuthToken(requestUrl);
    // const gamesData = await getGamesData(accessToken, credentials.clientId, "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games", "fields *; limit 3;");

    // //take & add Game's image to gamesData
    // const gamesObjFinal = await Promise.all(gamesData.map(async(element) => {
    //     const coversData = await getGamesData(accessToken, credentials.clientId, "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/covers", `fields *; limit 1; where game = ${element.id};`);
    //     if (coversData.length === 0) {
    //         coversData.push({ url: "//images.igdb.com/igdb/image/upload/t_cover_big/nocover.png" });
    //     }

    //     element.image = coversData[0].url.replace('t_thumb', 't_cover_big'); //change image size

    //     return element;
    // }));

    console.log(gamesObjFinal);
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

    gamesObjFinal.forEach(game => {

        new GamesCard({ gameName: game.name, image: game.image, firstReleaseDate: game.first_release_date, slug: game.slug, url: game.url, summary: game.summary }, '.games-flexbox').render()
    });

});