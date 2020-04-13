const posts = [{ title: "post 1 ", body: "post 1 body " }, { title: "post 2 ", body: "post 2 body " }];

//mimic a request to server to populate data
function getposts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {

            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);


};

function creatpost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 3000);
}
// without call backs the get posts run before create
// and the results won't be correct 
//so we need to call back get post in crete posts
//to make sure that the results backs from server is 
//correct 

creatpost({ title: "post 3", body: "body 3 " }, getposts);
//get post is the call back