// Asynchronous by defalut in NODE

function getJoke(){
    let data=fetch("https://v2.jokeapi.dev/joke/Dark",{
    method:"GET"
})
console.log(data);                     
console.log("chandu");
}
getJoke();
//output:
// Promise { <pending> }
// chandu

// Converting asynchronous code into synchronous as follows:

// async function getJoke(){
//     let k=await fetch("https://v2.jokeapi.dev/joke/Dark",{
//         method:"GET"
//     })
//     let data=await k.json();
//     console.log(data);
//     console.log("chandu");
// }
// getJoke();
// //output:
// {
//   error: false,
//   category: 'Dark',
//   type: 'twopart',
//   setup: 'What is the difference between acne and a catholic priest?',
//   delivery: 'Acne usually comes on a boys face *after* he turns 12.',
//   flags: {
//     nsfw: true,
//     religious: true,
//     political: false,
//     racist: false,
//     sexist: false,
//     explicit: true
//   },
//   id: 158,
//   safe: false,
//   lang: 'en'
// }
// chandu