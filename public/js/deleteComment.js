const deleteCommentButton = document.querySelectorAll('.delete-comment-btn');

for (let i = 0; i < deleteCommentButton.length; i++) {
  deleteCommentButton[i].addEventListener('click', async function () {
    const userId = parseInt(
      deleteCommentButton[i].getAttribute('data-user-id')
    );
    const postId = parseInt(
      deleteCommentButton[i].getAttribute('data-post-id')
    );

    const response = await fetch('/api/comment/delete', {
      method: 'DELETE',
      body: JSON.stringify({ userId, postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 403) {
      document.querySelector('.err').textContent =
        'Cannot delete other users comments';
    } else {
      document.location.reload();
    }
  });
}
