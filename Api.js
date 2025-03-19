export const fetchPosts = () =>
    fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json());
    