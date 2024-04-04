function FAQ() {
  const FAQ = document.getElementById("FAQ");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
      <div class="text-body">
          <h2 class='title fw-bold'>Contact Us</h2>
          <p>Feel free to reach out to us!</p>
      </div>
      <form id="contactForm" class="lg:w-50 sm:w-100 ">
      <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" required>
  </div>
          <div class="mb-3">
              <label for="name" class="form-label">Subject</label>
              <input type="text" class="form-control" id="name" name="name" required>
          </div>
         
          <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  `;
  FAQ.appendChild(Container);

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", handleSubmit);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const requestData = {
        from: formData.get('email'), // Use the email field as the 'from' key
        subject: formData.get('name'), // Use the name field as the 'subject' key
        message: formData.get('message') // Use the message field as the 'message' key
    };

    try {
        const response = await fetch('https://firewebmailer.vercel.app/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        console.log('Response:', response);
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    }
}

     
}

FAQ();
