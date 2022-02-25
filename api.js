// Load data Button 

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data.title))
}
// Load Users Button
function displayUsers(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name : ${user.name}
        Email : ${user.email}`;
        ul.append(li);
    }
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
// Load Post button 
function displayPost(data) {
    ul = document.getElementById('users')
    for (const user of data) {
        console.log(data);
        const li = document.createElement('li');
        li.innerText = user.title;
        ul.append(li);

    }
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
