const cardHolder = document.getElementById("top-ten")

// get top 10 crypto money data
fetch("/top10")
    .then(data=> data.json())
    .then(jsonData=>{
        jsonData.coins.forEach(el=>{
            cardHolder.innerHTML+=
                `<div class="card" id="${el.id}">
                    <div class="card-upper-info">
                        <img class="card-img" src="${el.icon}" alt="card-1">
                        <h2>${el.name} - ${el.symbol}</h2>
                    </div>
                    <div class="card-middle-info">
                        <div class="card-price-info">
                            <span class="dolar-sign">$</span>
                            <span class="price-info">${el.price}</span>
                        </div>
                        <span class="card-rank-info">RANK #${el.rank}</span>
                    </div>
                </div>`
            }
        )
    }
)