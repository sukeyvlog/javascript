const cardData = [
    {
      heading: "User",
      total: 100,
      button: "View User",
    },
    {
      heading: "Task",
      total: 150,
      button: "View Task",
    },
    {
      heading: "Customers",
      total: 320,
      button: "View Customers",
    },
    {
      heading: "Orders",
      total: 120,
      button: "View Orders",
    },
  ];
  
  // Assume you have a div container with id "card-container"
  const cardContainer = document.getElementById("card-container");
  
  // Loop through the cardData array and create cards dynamically
  cardData.forEach(card => {
    // Create a new card div
    const cardElement = document.createElement("div");
    cardElement.setAttribute("class", "card"); // Add a class for styling
  
    // Add card content (heading, total, button)
    cardElement.innerHTML = `
      <div class="card-header">
        <h3>${card.heading}</h3>
      </div>
      <div class="card-body">
        <p>Total: ${card.total}</p>
      </div>
      <div class="card-footer">
        <button onclick="viewDetails('${card.heading}')">${card.button}</button>
      </div>
    `;
  
    // Append the card to the card container
    cardContainer.appendChild(cardElement);
  });
  
  // Example function that could be triggered on button click
  function viewDetails(heading) {
    console.log(`Viewing details for: ${heading}`);
  }
  