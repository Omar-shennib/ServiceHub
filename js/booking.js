document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get('service');
  const providerName = urlParams.get('provider');

  const serviceSelect = document.getElementById('service');
  const providerSelect = document.getElementById('provider');

  function populateProviders(selectedService) {
    providerSelect.innerHTML = '<option value="" disabled selected>-- اختر مقدم الخدمة المفضل --</option>'; // Reset

    if (selectedService && providers[selectedService]) {
      providers[selectedService].forEach(provider => {
        const option = document.createElement('option');
        option.value = provider;
        option.textContent = provider;
        providerSelect.appendChild(option);
      });
    }
  }

  if (service && serviceSelect) {
    serviceSelect.value = service;
    populateProviders(service);
  }

  if (providerName && providerSelect) {
    let providerExists = false;
    for (let i = 0; i < providerSelect.options.length; i++) {
      if (providerSelect.options[i].value === providerName) {
        providerSelect.options[i].selected = true;
        providerExists = true;
        break;
      }
    }
    if (!providerExists) {
        const newOption = document.createElement('option');
        newOption.value = providerName;
        newOption.textContent = providerName;
        newOption.selected = true;
        providerSelect.appendChild(newOption);
    }

    const disabledOption = providerSelect.querySelector('option[disabled]');
    if (disabledOption) {
      disabledOption.remove();
    }
  }

  serviceSelect.addEventListener('change', function() {
    populateProviders(this.value);
  });

  const bookingForm = document.querySelector('.booking-form');
  const confirmationModal = document.getElementById('confirmation-modal');
  const confirmBtn = document.getElementById('confirm-btn');
  const declineBtn = document.getElementById('decline-btn');

  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting immediately
    confirmationModal.style.display = 'flex'; // Show the modal
  });

  confirmBtn.addEventListener('click', function() {
    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console and show a success message
    console.log('Booking confirmed');
    confirmationModal.style.display = 'none';
    alert('تم تأكيد حجزك بنجاح!'); // Show a success alert
    bookingForm.reset(); // Reset the form
    providerSelect.innerHTML = '<option value="" disabled selected>-- اختر مقدم الخدمة المفضل --</option>';

  });

  declineBtn.addEventListener('click', function() {
    confirmationModal.style.display = 'none'; // Hide the modal
  });
});
