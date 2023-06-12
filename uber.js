function getUberList() {
    fetch("https://api.publicapis.io/entries?category=Transportation")
      .then(response => response.json())
      .then(data => {
        displayUberList(data);
      })
      .catch(error => {
        console.error("Error retrieving Uber list:", error);
      });
  }
  
  function displayUberList(uberList) {
    const uberListContainer = document.getElementById("uber-list");
    uberListContainer.innerHTML = "";
  
    uberList.entries.forEach(uber => {
      const uberCard = createUberCard(uber);
      uberListContainer.appendChild(uberCard);
    });
  }
  
  function createUberCard(uber) {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = uber.API;
  
    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = uber.Description;
  
    const link = document.createElement("a");
    link.classList.add("btn", "btn-primary");
    link.href = uber.Link;
    link.target = "_blank";
    link.textContent = "API Documentation";
  
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(link);
    card.appendChild(cardBody);
  
    return card;
  }
  