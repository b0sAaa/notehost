/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  setInterval(() => {
    // Remove all Notion tooltips on images
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Remove hidden properties dropdown
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling

    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none'
    }
  }, 1000)
}
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .notion-lightbox { max-height: 85vh !important; overflow-y: scroll !important; }
    .lightbox-close { position: fixed; top: 10px; right: 10px; background: rgba(0, 102, 204, 0.8); color: white; border: none; border-radius: 50%; padding: 8px; cursor: pointer; z-index: 1001; }
    .lightbox-close::after { content: '✕'; }
    @media (max-width: 768px) { .notion-lightbox { max-height: 80vh !important; } }
  </style>
`);
document.addEventListener('click', e => {
  if (e.target.classList.contains('lightbox-close')) e.target.closest('.notion-lightbox').style.display = 'none';
});
