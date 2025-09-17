//JSON(javascript object notation)
let obj1={
    name:'chandu',
    age:'20'
}
let obj2={
    name:'karthk',
    age:'20'
}

console.log(typeof obj1);         //object

// in order to transfer data to other entity we have to convert obj to string as follows:

let stringedobj=JSON.stringify(obj1);
console.log(typeof stringedobj);        //string

// inorder to access that send data we have to return conver it into obj format as follows:

let parsedobj=JSON.parse(stringedobj);
console.log(typeof parsedobj);          //object