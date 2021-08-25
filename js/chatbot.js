welcomeMessage();
var userId = null;
var first = true;

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});

function output(input) {
    let product;

    // Regex remove non word/space chars
    // Trim trailing whitespce

    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").trim();

    if (userId == null) {
        product = matchPatient(text);
    } else {
        product = process(text);
    }

    // Update DOM
    addChat(input, product);
}

function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="../src/user.png" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "../src/bot-mini.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    // Fake delay to seem "real"
    setTimeout(() => {
        botText.innerText = `${product}`;
    }, 2000)

    if (first) {
        first = false;
        help();
    }

}

function welcomeMessage() {
    const messagesContainer = document.getElementById("messages");

    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "../src/bot-mini.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    // Fake delay to seem "real"
    setTimeout(() => {
        botText.innerText = `${"Welcome to HopiBot!\nWhat is your relatives OPD number?"}`;
    }, 2000)
}

function help() {
    const messagesContainer = document.getElementById("messages");

    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "../src/bot-mini.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

    // Fake delay to seem "real"
    setTimeout(() => {
        botText.innerText = `${"How may I help you?\n" +
            "You can write: \"status\" to get the patient's status\n" +
            " or \"room\" and I will tell you their room number.\n" +
            "Enter \"help\" to see this help again or \"quit\" to exit the chat."}`;
    }, 2000)
}


class patient {
    constructor(name, id, illness, room, released) {
        this.name = name;
        this.id = id;
        this.illness = illness;
        this.room = room;
        this.released = released;
    }
}

let david = new patient("David B.", 101, "Headache", 1423, true);
let anna = new patient("Anna H.", 102, "Broken leg", 1241, false);
let chan = new patient("Chan M.", 103, "Heartbreaking", 1506, true);
let kj = new patient("Peter P.", 104, "Overdose", 1507, true);
let christ = new patient("Christ M.", 105, "Overdrunk", 2013, false);

let database = new Map();
database.set("1", david);
database.set("2", anna);
database.set("3", chan);
database.set("4", peter);
database.set("5", christ);


function matchPatient(input) {
    if (database.has(input)) {
        let user = database.get(input).name;
        userId = input;
        return "Alright, I found " + user + " in my database";
    } else {
        return "I didn't find that Patient, please try again!";
    }
}

function process(msg) {
    if (msg.split(" ").includes("status")) {
        if (database.get(userId).status) {
            return database.get(userId).name + " has been released from the hospital.";
        } else {
            return database.get(userId).name + " has not been released from the hospital so far.";
        }
    } else if (msg.split(" ").includes("room")) {
        return database.get(userId).name + "'s room number is: " + database.get(userId).room;
    } else if (msg.split(" ").includes("illness")) {
        return database.get(userId).name + " is suffering from " + database.get(userId).illness;
    } else if (msg.split(" ").includes("quit")) {
        // return history.back();
        return "Goodbye!"
    } else if (msg.split(" ").includes("help")) {
        return "You can write: \"status\" to get the patient's status\n" +
            " or \"room\" and I will tell you their room number.\n" +
            "Enter \"help\" to see this help again or \"quit\" to exit the chat."
    } else {
        return "Sorry, I didn't get that.\n" + "You can write: \"status\" to get the patient's status\n" +
            " or \"room\" and I will tell you their room number.\n" +
            "Enter \"help\" to see this help again or \"quit\" to exit the chat."
    }
}