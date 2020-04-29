const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
function sendHttpRequest(method, url, data) {
  //   const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  //xhr.setRequestHeader('Content-type','application/json);
  // xhr.open(method, url);
  // xhr.responseType = 'json';
  // xhr.onload = function () {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     resolve(xhr.response);
  //   } else {
  //     reject(new Error('Something Went Wrong'));
  //   }
  // };

  // xhr.onerror = function () {
  //   reject(new Error('Something Went Wrong'));
  // };
  // xhr.send(JSON.stringify(data));
  // });
  // return promise;
  return fetch(url, {
    method,
    body: data,
    // headers: {
    //   'Content-type': 'application/json',
    // },
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then(errData => {
          throw new Error('Something went wrong - server-side.');
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error('Something went wrong');
    });
}

async function fetchPosts() {
  try {
    listElement.innerHTML = '';
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = response.data;
    for (post of posts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title,
    body: content,
    userId,
  };

  const fd = new FormData(form);
  //   fd.append('title', title);
  //   fd.append('body', content);
  //   fd.append('userId', userId);
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts/',
    post
  );
  console.log(response);
}

fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
});

listElement.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + postId);
  }
});
