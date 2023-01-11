const updatePost = async (event) => {
  event.preventDefault();

  const title = document.getElementById('title-input').value.trim();
  const postText = document.getElementById('post-text').value.trim();
  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (title && postText) {
    const response = await fetch(`/api/posts/updatePost/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, postText }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/dashboard');
    } else {
      alert(response.message);
    }
  }
};

const submitEdit = document
  .querySelector('.submit-post')
  .addEventListener('click', updatePost);
