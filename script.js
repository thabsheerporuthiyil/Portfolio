AOS.init();
  function openPdf(){
            window.open("pdf.html", "_blank");
        }
  (function() {
    emailjs.init("6XhTN8wrUG0cHsk-m"); 
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_7neivdz', 'template_c13b2zf', this)
      .then(function() {
        alert('Message sent successfully!');
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  });