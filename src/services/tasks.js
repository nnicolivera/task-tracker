const baseUrl = "http://localhost:3001/tasks";

const handleResponse = async (request) => {
    if (!request.ok) {
        throw new Error(`Failed to fetch: ${request.statusText}`);
    }
    return await request.json();
};

const getAll = async () => {
    return handleResponse(await fetch(baseUrl));
};

const get = async (id) => {
    return handleResponse(await fetch(`${baseUrl}/${id}`));
};

const add = async (newObject) => {
    return handleResponse(
        await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject),
        })
    );
};

const update = async (id, newObject) => {
    return handleResponse(
        await fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject),
        })
    );
};

const remove = async (id, newObject) => {
    return handleResponse(
        await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject),
        })
    );
};

export default { getAll, get, add, update, remove };
