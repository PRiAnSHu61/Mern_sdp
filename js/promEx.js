const userArr = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Emily", age: 30 },
    { id: 3, name: "Micheal", age: 20 }
];

function getUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(userArr);
        }, 5000);
    });
}

function getUserbyID(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const user = userArr.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        }, 7000);
    });
}

async function consumegetUser() {
    try {
        const response = await getUser();
        console.log("All Users:", response);
    } catch (error) {
        console.log(error);
    }
}

async function consumegetUserbyID(id) {
    try {
        const user = await getUserbyID(id);
        console.log("User with ID", id, ":", user);
    } catch (error) {
        console.log(error);
    }
}

consumegetUser();
consumegetUserbyID(2);
