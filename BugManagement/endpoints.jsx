const getBug = async () => {
    const response = await fetch("/bugs");
    const data = await response.json();
    return data;
}
const getBugsByID = async (id) => {
    const response = await fetch("/data/:id");
    const data = await response.json();
    return data;
}

const addNewBugs = async (title, description, priority, status) => {
    const response = await fetch("/addbugs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({title, description, priority, status}),
    });
    const data = await response.json();
    return data;
}

const updatesBugsHistory = async (id, description, priority, status) => {
    const response = await fetch(`/addBugsHistory/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({description, priority, status}),
    });
    const data = await response.json();
    return data;
}

const deleteBugs = async (id) => {
    const response = await fetch(`/bug/:id`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
}

const deleteHistory = async (id) => {
    const response = await fetch(`/history/:id`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
}