// db933142c91d582345976098a6d7b451

let app = document.getElementById("app");

console.log(fetch())
fetch('https://developers.zomato.com/api/v2.1/search', {
    headers: {
        "Accept": "application/json",
        "user-key": "db933142c91d582345976098a6d7b451"
    }
}).then(stream => {

    stream.json().then(data => {
        console.log(data)

        data.restaurants.map(e => {
            let card = document.createElement("div");
            let img = document.createElement('img');
            let cardBody = document.createElement('div');
            let heading = document.createElement('h5');
            let content = document.createElement('p');
            let button = document.createElement('a');
            img.src = e.restaurant.photos[0].photo.thumb_url
            
            heading.innerHTML = e.restaurant.name;
            content.innerHTML = e.restaurant.cuisines;
            button.innerText = "Plz Go To hell for dinner"

            card.className = "card";
            img.className = "card-img-top";
            cardBody.className = "card-body";
            heading.className = "card-title";
            content.className = "card-text";
            button.className = "btn btn-primary";

            cardBody.appendChild(heading);
            cardBody.appendChild(content);
            cardBody.appendChild(button);
            card.appendChild(img);
            card.appendChild(cardBody);

            app.appendChild(card)

        })


    })
})