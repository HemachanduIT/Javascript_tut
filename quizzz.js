const prompt = require("prompt-sync")()
const fs = require("fs")
function loadQues() {
    try {
        const data = fs.readFileSync("questions.json", "utf8")
        const questions = JSON.parse(data).questions
        return questions
    } catch (e) {
        console.log("error occued !!", e)
        return []
    }
}

function randomQues(questions, no_of_ques) {
    if (no_of_ques > questions.length) {
        no_of_ques = questions.length
    }
    const shuffle = questions.sort(() => {
        return 0.5 - Math.random()
    })
    return shuffle.slice(0, no_of_ques)
}

function askQues(quest) {
    console.log(quest.question)
    for (let i = 0; i < quest.options.length; i++) {
        const option = quest.options[i]
        console.log(`${i + 1}.${option}`)
    }
    const choice = parseInt(prompt("choose the number"))
    if (isNaN(choice) || choice < 1 || choice > quest.options.length) {
        console.log("invalid input or choide")
        return false
    }
    const choosen = quest.options[choice - 1]
    return choosen === quest.answer
}

const number_of_ques = parseInt(prompt("enter no of questions"))
const questi = loadQues()
const randomquestions = randomQues(questi, number_of_ques)
let correct = 0;
const start_time = Date.now()
for (let question of randomquestions) {
    let isCorrect = askQues(question)
    console.log()
    if (isCorrect) correct++;
}
const end_time = Date.now() - start_time

console.log("correct answers are: ", correct)
console.log("time taken to answer is: ", Math.round(end_time / 1000) + "s")
console.log("score is: ", Math.round((correct / number_of_ques) * 100) + "%")
