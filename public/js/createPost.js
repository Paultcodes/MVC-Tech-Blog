const submitPostHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.getElementById('title-input').value.trim();
  const postText = document.getElementById('post-text').value.trim();

  if (postTitle && postText) {
    const response = await fetch('/api/posts/create', {
      method: 'POST',
      body: JSON.stringify({ postTitle, postText }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const submitPost = document
  .querySelector('.submit-post')
  .addEventListener('click', submitPostHandler);


