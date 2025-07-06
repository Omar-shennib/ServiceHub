document.addEventListener('DOMContentLoaded', function() {
  const specialtyFilter = document.getElementById('specialty-filter');
  const professionalCards = document.querySelectorAll('.professional-card');

  specialtyFilter.addEventListener('change', function() {
    const selectedSpecialty = specialtyFilter.value;

    professionalCards.forEach(card => {
      const cardSpecialty = card.getAttribute('data-specialty');
      if (selectedSpecialty === 'all' || selectedSpecialty === cardSpecialty) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

