import { useEffect } from "react";
import { useTheme } from "../contents/themeContext";

function Database() {
  const { theme } = useTheme();

  useEffect(() => {
    // Function to fetch bugs from the API
    function fetchBugs() {
      fetch('/bugs')
        .then(response => response.json())
        .then(bugs => {
          const bugsList = document.getElementById('bugs-list');
          bugsList.innerHTML = ''; // Clear previous content

          bugs.forEach(bug => {
            const bugItem = document.createElement('div');
            bugItem.innerHTML = `
              <h2>${bug.title}</h2>
              <p>Description: ${bug.description}</p>
              <p>Priority: ${bug.priority}</p>
              <p>Status: ${bug.status}</p>
              <button onclick="deleteBug(${bug.id})">Delete</button>
            `;
            bugsList.appendChild(bugItem);
          });
        })
        .catch(error => console.error('Error fetching bugs:', error));
    }

    // Function to delete a bug
    function deleteBug(id) {
      fetch(`/bug/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(result => {
          console.log('Bug deleted successfully:', result);
          fetchBugs(); // Refresh bug list after deletion
        })
        .catch(error => console.error('Error deleting bug:', error));
    }

    // Initial fetch of bugs when the page loads
    fetchBugs();

  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      <h1>Bug Tracker</h1>

      <div id="bugs-list">
        {/* Bug items will be dynamically added here */}
      </div>
    </div>
  );
}

export default Database;
