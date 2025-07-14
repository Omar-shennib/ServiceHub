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

const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');
const uploadIcon = document.getElementById('uploadIcon');
const uploadText = document.getElementById('uploadText');

uploadBox.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = e => {
      previewImage.src = e.target.result;
      previewImage.style.display = 'block';
      uploadIcon.style.display = 'none';
      uploadText.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});

const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('تم إرسال بياناتك بنجاح إلى فريق الإدارة. سنقوم بمراجعتها والتواصل معك في أقرب وقت ممكن');
    window.location.href = 'index.html';
  });
}
