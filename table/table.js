const tasks = [
    {
      name: "Task 1",
      description: "Complete the project proposal.",
      dueDate: "2024-11-15",
      status: "In Progress",
      priority: "High"
    },
    {
      name: "Task 2",
      description: "Update the company website.",
      dueDate: "2024-11-20",
      status: "Not Started",
      priority: "Medium"
    },
    {
      name: "Task 3",
      description: "Organize team meeting for next week.",
      dueDate: "2024-11-10",
      status: "Completed",
      priority: "Low"
    },
    {
      name: "Task 4",
      description: "Write a blog post about task management.",
      dueDate: "2024-11-18",
      status: "In Progress",
      priority: "Medium"
    },
    {
      name: "Task 5",
      description: "Prepare slides for the upcoming presentation.",
      dueDate: "2024-11-12",
      status: "Not Started",
      priority: "High"
    },
    {
      name: "Task 6",
      description: "Conduct user research for new feature.",
      dueDate: "2024-11-25",
      status: "Not Started",
      priority: "High"
    },
    {
      name: "Task 7",
      description: "Test the latest release of the app.",
      dueDate: "2024-11-22",
      status: "In Progress",
      priority: "Medium"
    },
    {
      name: "Task 8",
      description: "Refactor the old codebase to improve performance.",
      dueDate: "2024-11-30",
      status: "Not Started",
      priority: "High"
    }
  ];
  


  const body = document.getElementById("tbody");

  // Loop through each task and create a table row with its data
  tasks.forEach(task => {
    // Create a new row (<tr>)
    const row = document.createElement("tr");
    row.setAttribute("class", "dataRow");
    
  
    // Create each cell (<td>) and append it to the row
    row.innerHTML = `
      <td class="tdata">${task.name}</td>
      <td class="tdata">${task.description}</td>
      <td class="tdata">${task.dueDate}</td>
      <td class="tdata">${task.status}</td>
      <td class="tdata">${task.priority}</td>
      <td class="tdata"><button onclick="deleteTask(this)">Delete</button></td>
    `;
  
    // Append the row to the table body
    body.appendChild(row);
  });