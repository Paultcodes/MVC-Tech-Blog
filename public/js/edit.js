const deletePost = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/dashboard/delete/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      post_id: id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/dashboard');
  } else {
    alert(response.statusText);
  }
};

const deletePostButton = document
  .querySelector('.delete-button')
  .addEventListener('click', deletePost);


  console.log('hello')