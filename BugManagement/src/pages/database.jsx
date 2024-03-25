import React, { useState, useEffect } from "react";

function Database() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    function fetchBugs() {
      fetch('/bugs')
        .then(response => response.json())
        .then(data => setBugs(data))
        .catch(error => console.error('Error fetching bugs:', error));
    }

    fetchBugs();
  }, []);

  function deleteBug(id) {
    fetch(`/bug/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(result => {
        console.log('Bug deleted successfully:', result);
        setBugs(bugs.filter(bug => bug.id !== id));
      })
      .catch(error => console.error('Error deleting bug:', error));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Bug Tracker</h1>
      <div id="bugs-list" className="grid gap-4">
        {bugs.map(bug => (
          <div key={bug.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{bug.title}</h2>
            <p className="text-gray-700 mb-2">Description: {bug.description}</p>
            <p className="text-gray-700 mb-2">Priority: {bug.priority}</p>
            <p className="text-gray-700 mb-2">Status: {bug.status}</p>
            <button onClick={() => deleteBug(bug.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Database;
