export const fetchPosts = () =>{
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
request.send();
}
    