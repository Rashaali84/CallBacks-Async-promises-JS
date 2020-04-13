const posts = [{ title: "post 1 ", body: "post 1 body " }, { title: "post 2 ", body: "post 2 body " }];

//mimic a request to server to populate data
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {

            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};
//instead of using a call back we are going to use a promise !
// takes two parameters call back function and
// the call back function has resolve / reject as inputs  
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            // add error checking and decide weather resolve or reject 
            const err = false;
            if (!err)
                resolve();
            else
                reject('error .... ');
        }, 3000);
    })

}
//createPost({ title: "post 3", body: "body 3 " })
//.then(getPosts).catch(err => console.log(err));

//now let's study promise all 
//let's declare a bunch of promises 
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Goodbye"));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// it return promise 
// a call to fetch Fake Online REST API for Testing and Prototyping 
// res.json to return  actual formated data of users lists 
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));