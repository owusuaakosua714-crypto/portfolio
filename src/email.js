/* ==========================================================================
   EMAILJS CONTACT FORM SUBMISSION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const statusMsg = document.getElementById('contactFormStatus');

  if (!contactForm) return;

  // ------------------------------------------------------------------------
  // EMAILJS CREDENTIALS
  // ------------------------------------------------------------------------
  const EMAILJS_PUBLIC_KEY = "3mvPRSQpEErBVCx9o";   
  const EMAILJS_SERVICE_ID = "service_mikbjct";   
  const EMAILJS_TEMPLATE_ID = "template_gn11dq4";

  // Initialize EmailJS with your Public Key
  if (window.emailjs) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Perform form validation first
    if (typeof window.validateContactForm === 'function') {
      const isValid = window.validateContactForm();
      if (!isValid) return; // Stop if validation fails
    }

    // Disable button during submission to prevent duplicate sends
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusMsg.className = "contact-form-status";
    statusMsg.textContent = "";

    // Send email using EmailJS sendForm method
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
      .then(() => {
        // Success handler
        statusMsg.className = "contact-form-status success";
        statusMsg.textContent = "Message sent successfully! Thank you for reaching out. I'll get back to you soon.";
        contactForm.reset();
      })
      .catch((error) => {
        // Error handler
        console.error("EmailJS Error:", error);
        statusMsg.className = "contact-form-status error";
        statusMsg.textContent = "Something went wrong while sending your message. Please try again or contact me directly by email.";
      })
      .finally(() => {
        // Re-enable button after completion
        submitBtn.disabled = false;
        submitBtn.textContent = "✈️ Send Message →";
      });
  });
});