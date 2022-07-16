
async function search(dataSearch, limit) {
  let base_url = 'https://api.giphy.com/v1/gifs/';
  let api_key = 'eYtrN3x6K5CujtbpVOTxbiYrv4ReGPid';
  let endpoint = 'search';
  let search = dataSearch;
  let limit = limit;
  let url = `${base_url}${endpoint}?api_key=${api_key}&q=${search}&limit=${limit}`;

  console.log("url", url);
  
  const response = await fetch(url);
  const gifts = await response.json();
  
  return gifts;
};

let btnSearch  = document.querySelector("#btnSearch");
btnSearch?.addEventListener("click", async() =>{
  const container = document.querySelector("#result");
  const txtSearch = document.querySelector("#txtSearch").value;
  
  const resultSearch = await search(txtSearch, 10);
  container.innerHTML = "";

  for(let item of resultSearch.data){
      let original = item.images.downsized.url;
      let gift = `<div>
                        <img class="card-image" src="${original}">
                        <h4>${item.title}</h4>
                  </div>`;

    container.innerHTML += gift;    
  }

});

