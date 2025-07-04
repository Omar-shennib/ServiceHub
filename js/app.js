document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.jobs a, .jobs button').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName !== 'INPUT') {
        document.querySelectorAll('.jobs .selected').forEach(el => {
          el.classList.remove('selected');
          el.querySelector('.job-checkbox').checked = false;
        });
        item.classList.add('selected');
        item.querySelector('.job-checkbox').checked = true;
      }
    });
  });
});
