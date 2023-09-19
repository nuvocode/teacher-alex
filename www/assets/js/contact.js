$(document).ready(function () {
    const contactForm = $('#contact-form');
    const sentMsg = $('#sent-msg');
    sentMsg.hide();
    $('#phoneInput').inputmask();

  
    contactForm.on('submit', function (e) {
      e.preventDefault(); // prevent default form submission
  
      // get form data
      const name = $('#nameInput').val();
      const phone = $('#phoneInput').val();
      const email = $('#floatingInput').val();
      const message = $('#messageInput').val();

      const recaptchaResponse = grecaptcha.getResponse();
      // send form data using AJAX
      $.ajax({
        url: 'https://us-central1-max-knox.cloudfunctions.net/contactForm',
        method: 'POST',
        data: JSON.stringify({ name, phone, email, message, recaptchaResponse }),
        contentType: 'application/json',
        success: function (response) {
          console.log('Response:', response); // Log response from the server
          sentMsg.show();
          contactForm.hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // display error message
          console.error('Error sending message:', textStatus, errorThrown);
        }
      });

    });
  });  
