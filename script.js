const linkItems = document.querySelectorAll('.icons-list-item-link');
const contentItems = document.querySelectorAll('.icons-content-item');

linkItems.forEach((item) => item.addEventListener('mouseenter', onLinkHover));

function onLinkHover({ target }) {
  for (const item of contentItems) {
    item.classList.add('hidden');
    if (item.id === target.dataset.targetItem) {
      item.classList.remove('hidden');
    }
  }
}