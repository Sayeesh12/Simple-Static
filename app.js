document.addEventListener('DOMContentLoaded', () => {
  const badge = document.querySelector('.badge');
  const deployedAt = new Date().toLocaleString();
  console.log(`Safe Deploy App loaded at ${deployedAt}`);
  if (badge) {
    badge.title = `Last loaded: ${deployedAt}`;
  }
});
