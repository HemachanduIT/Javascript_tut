const prompt=require("prompt-sync")()
const name=prompt("what is your name?  ")
console.log("Hello"+name+"How are u?")
const shouldWePlay=prompt("Do u like to play the game?  ").toLowerCase()
if(shouldWePlay==="yes" || shouldWePlay==="y"){
    const LorR=prompt("where do u want to go either left or right? ").toLowerCase()
    if(LorR==="left"){
        console.log("u go left and see bridge!")
        const cross=prompt("do u want to cross the brige? ").toLowerCase()
        if(cross==="yes"){
            console.log("u will die(:")
        }else{
            console.log("u willl win):")
        }
    }else{
        console.log("u cannot win the game!!!")
    }
    console.log("")
}else if(shouldWePlay==="no" || shouldWePlay==="n"){
    console.log("its okay!!!")
}else{
    console.log("Enter valid input!!!")
}