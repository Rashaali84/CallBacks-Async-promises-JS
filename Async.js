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
//async - await 
//function has to bel labeled async
//more elegant way to handle promises 
/*async function init() {
    // await for asynchronous action to be completed 
    await createPost({ title: "post 3", body: "body 3 " });
    getPosts();
}

init();*/

//Async - await with fetch 
async function fetchUsers() {

    //await for fetch because fetch is a promise 
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}
fetchUsers();