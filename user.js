tasks = [
    {
        "first_name": "John",
        "last_name": "Doe",
        "address": "123 Main St, New York, NY 10001",
        "email": "john.doe@example.com"
    },
    {
        "first_name": "Jane",
        "last_name": "Smith",
        "address": "456 Oak Rd, Los Angeles, CA 90001",
        "email": "jane.smith@example.com"
    },
    {
        "first_name": "Mike",
        "last_name": "Johnson",
        "address": "789 Pine Ln, Chicago, IL 60601",
        "email": "mike.johnson@example.com"
    },
    {
        "first_name": "Emily",
        "last_name": "Davis",
        "address": "101 Maple Ave, San Francisco, CA 94102",
        "email": "emily.davis@example.com"
    },
    {
        "first_name": "David",
        "last_name": "Martinez",
        "address": "202 Birch Blvd, Miami, FL 33101",
        "email": "david.martinez@example.com"
    }
]



  const body = document.getElementById("tbody");

  // Loop through each task and create a table row with its data
  tasks.forEach(task => {
    // Create a new row (<tr>)
    const row = document.createElement("tr");
    row.setAttribute("class", "dataRow");
    
  
    // Create each cell (<td>) and append it to the row
    row.innerHTML = `
      <td class="tdata">${task.first_name}</td>
      <td class="tdata">${task.last_name}</td>
      <td class="tdata">${task.address}</td>
      <td class="tdata">${task.email}</td>
      <td class="tdata"><button onclick="deleteTask(this)">Delete</button></td>
    `;
  
    // Append the row to the table body
    body.appendChild(row);
  });