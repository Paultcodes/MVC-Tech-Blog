const submitCommentHandler = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector('.comment-input').value.trim();

  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (commentText && postId) {
    const response = await fetch('/api/comment/create', {
      method: 'POST',
      body: JSON.stringify({ commentText, postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }

};

const commentButton = document
  .querySelector('.comment-button')
  .addEventListener('click', submitCommentHandler);
