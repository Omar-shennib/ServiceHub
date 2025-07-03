
//LOGIN 1//
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.jobs .job-checkbox');
  // Uncheck all checkboxes and remove .selected on page load
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
    checkbox.closest('a')?.classList.remove('selected');
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      checkboxes.forEach(cb => {
        cb.closest('a')?.classList.remove('selected');
        if (cb !== this) cb.checked = false;
      });
      if (this.checked) {
        this.closest('a')?.classList.add('selected');
      }
    });
  });

  // Prevent default action for job links, but allow checkbox clicks
  document.querySelectorAll('.jobs a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() !== 'input') {
        e.preventDefault();
      }
    });
  });
});

//LOGIN 2//

