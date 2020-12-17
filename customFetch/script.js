const url = "https://reqres.in/api/users";
function getData() {
    myFetch(url, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}

const postData = async () => {
    try {
        const response = await myFetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "leader",
            }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

function myFetch(url, data = {}) {
    const promise = new Promise((resolveFunc, rejectFunc) => {
        const request = new XMLHttpRequest();
        request.open(data.method || "GET", url);
        if (data.method == "POST") {
            for (const property in data.headers) {
                request.setRequestHeader(property, data.headers[property]);
            }
        }
        request.send(data.body || null);
        request.onload = () => {
            const response = new myResponse(request);
            resolveFunc(response);
        };
        request.onerror = () => {
            console.log("error");
            rejectFunc(new Error("Something went wrong"));
        };
    });

    return promise;
}

class myResponse {
    constructor(request) {
        this.response = request.response;
    }

    json() {
        return Promise.resolve(JSON.parse(this.response));
    }
}
