const baseUrl = "http://localhost:3001/tasks";

const getAll = async () => {
    const request = await fetch(baseUrl);
    const response = await request.json();
    return response;
};

const get = async (id) => {
    const request = await fetch(`${baseUrl}/${id}`);
    const response = await request.json();
    return response;
};

const add = async (newObject) => {
    const request = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newObject),
    });
    const response = await request.json();
    return response;
};

const update = async (id, newObject) => {
    const request = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newObject),
    });
    const response = await request;
    return response;
};

const remove = async (id, newObject) => {
    const request = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newObject),
    });
    const response = await request;
    return response;
};

const exportedObj = { getAll, get, add, update, remove };
export default exportedObj;
