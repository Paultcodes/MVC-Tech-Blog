const submitPostHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('title-input').value.trim();
  const postText = document.querySelector('post-text').value.trim();

  if (postTitle && postText) {
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ postTitle, postText }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
