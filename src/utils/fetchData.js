const sendGetRequest = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const sendDeleteRequest = async (url) => {
    await fetch(url, {
        method: "DELETE"
    });
}

export { sendGetRequest, sendDeleteRequest };