const prompt = require("prompt-sync")()
function printInfo() {
    console.log("Contact Management System")
    console.log("________________")
    console.log("1.add a contact")
    console.log("2.delete a contact")
    console.log("3.search a contact")
    console.log("4.view a contact")
    console.log("5.Exit")
}
function addContact() {
    const name = prompt("enter your name: ")
    const email = prompt("enter your email: ")
    const contact = {
        name: name,
        mail: email
    }
    contacts.push(contact)
    console.log("Added!!!")
}
function delContact() {
    console.log("contact details")
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i]
        console.log((i + 1).toString() + ":" + contact.name)
    }
    const num = parseInt(prompt("enter an ID"))
    if (isNaN(num) || num > contacts.length) {
        console.log("invalid!!")
        return
    }
    contacts.splice(num - 1, 1)
    console.log("Deleted!!!!")
}
function searchContact() {
    const searchEle = prompt("enter a string: ").toLowerCase()
    const results = [];
    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(searchEle)) results.push(contact)
    }
    listContact(results)

}
function listContact(contacts) {
    for (let contact of contacts) {
        console.log("###########")
        console.log("Name: ", contact.name)
        console.log("email: ", contact.mail)
    }
}
printInfo()
const contacts = []
let valid = true
while (valid) {
    const num = prompt("enter an operation(1-5)")
    switch (num) {
        case "1":
            addContact()
            break;
        case "2":
            delContact()
            break;
        case "3":
            searchContact()
            break;
        case "4":
            listContact(contacts)
            break;
        case "5":
            valid = false;
            break;
        default:
            console.log("Unknown")
            break;
    }
}