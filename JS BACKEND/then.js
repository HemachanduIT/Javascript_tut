// output with entire response

// function getJoke1(){
//     let k=fetch("https://v2.jokeapi.dev/joke/Dark",{
//         method:"GET"
//     })
//     k.then(data=>{
//         console.log(data);
//     })
//     console.log("chandu");
// }
// getJoke1();
// output: entire response
/*
chandu
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Wed, 17 Sep 2025 18:36:43 GMT',
    'content-type': 'application/json; charset=UTF-8',
    'content-length': '435',
    connection: 'keep-alive',
    'cf-ray': '980ab5efcf58cded-SIN',
    'access-control-allow-origin': '*',
    'access-control-request-method': 'GET',
    'access-control-allow-methods': 'GET, POST, HEAD, OPTIONS, PUT',
    'access-control-allow-headers': '*',
    allow: 'GET, POST, HEAD, OPTIONS, PUT',
    'api-info': 'JokeAPI v2.3.3 (https://v2.jokeapi.dev)',
    'cache-control': 'no-cache, no-store, must-revalidate, no-transform',
    pragma: 'no-cache',
    expires: '0',
    'retry-after': '5',
    'ratelimit-limit': '120',
    'ratelimit-remaining': '118',
    'ratelimit-reset': 'Wed Sep 17 2025 18:36:47 GMT+0000 (Coordinated Universal Time)',
    'content-security-policy': "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'",
    'strict-transport-security': 'max-age=15552000',
    'referrer-policy': 'no-referrer, strict-origin-when-cross-origin',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    'cf-cache-status': 'DYNAMIC',
    'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=uSdQ%2BfrT6326i0dta5V90yc1Y4sX1ITNRAWlQ3NwsdzB8VSlbkRj6s5QzNLeCEDrZiU6f3vWMQke7pjSLQ3brne3ToD7xF33H%2B9R6b0DPRa%2FlAJkdc%2FAt4bkNWtFs435onXd89EtzukQ5OWKJQ%3D%3D"}],"group":"cf-nel","max_age":604800}',
    nel: '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    server: 'cloudflare',
    'alt-svc': 'h3=":443"; ma=86400',
    'server-timing': 'cfL4;desc="?proto=TCP&rtt=67319&min_rtt=61985&rtt_var=33913&sent=5&recv=5&lost=0&retrans=0&sent_bytes=2841&recv_bytes=671&delivery_rate=38410&cwnd=252&unsent_bytes=0&cid=243e544e6cd66db1&ts=292&x=0"'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://v2.jokeapi.dev/joke/Dark'
}
*/


// output with only needed response
function getJoke1(){
    let k=fetch("https://v2.jokeapi.dev/joke/Dark",{
        method:"GET"
    })
    k.then(chandu=>{
        return chandu.json();
    })
    .then(chandu=>{
        console.log(chandu);
    })
    .catch(err=>{
        console.log(err);
    })
    console.log("chandu");
}
getJoke1();
