fetch("https://rickandmortyapi.com/api/character")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let characters = data.results;
    let output = "";
    for (let i = 0; i < characters.length; i++) {
      output += `
            <div class="card p-3">
                <img src="${characters[i].image}" alt="${characters[i].name} class="card-img-top"">
                <div class="card-body">
                    <h1>${characters[i].name}</h1>
                    <p>${characters[i].species}</p>
                    <p>${characters[i].status}</p>
                    <p>${characters[i].origin.name}</p>
                </div>
            </div>
            `;
    }
    document.getElementById("characters").innerHTML = output;
  });
