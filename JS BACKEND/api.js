// Asynchronous by defalut in NODE

// function getJoke(){
//     let data=fetch("https://v2.jokeapi.dev/joke/Dark",{
//     method:"GET"
// })
// console.log(data);                      //Promise { <pending> }
// console.log("chandu");                  //chandu
// }
// getJoke();

// Converting asynchronous code into synchronous as follows:

async function getJoke(){
    let k=await fetch("https://v2.jokeapi.dev/joke/Dark",{
        method:"GET"
    })
    let data=await k.json();
    console.log(data);
    console.log("chandu");
    return
}