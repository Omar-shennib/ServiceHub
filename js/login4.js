document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.jobs a, .jobs button').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName !== 'INPUT') {
        // Toggle selection instead of forcing single selection
        item.classList.toggle('selected');
        const checkbox = item.querySelector('.job-checkbox');
        checkbox.checked = !checkbox.checked; // Toggle checkbox state
      }
    });
  });
});
