function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
  <div
          class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
        >
          <div class="text-body position-absolute">
            <div class="quote-mark position-absolute">
              <img src="./Images/Quote mark.png" alt="" srcset="" />
            </div>
            <h2 class="title fw-bold">Real Stories from Real Customers</h1>
            <p>Get inspired by these stories.</p>
          </div>
          <div class="col">
    <div class="testimonial-item bg-white rounded item-1">
        <div class="client-logo">
            <img src="https://raudratechnologies.com/logo.webp" alt="" srcset="" style="max-width: 80px; max-height: 80px;" />
        </div>
        <div class="content mt-3">
            <div class="feed-personalDetails">
                <p class="feed">
                Fireweb Technologies turned our vision into reality with their exceptional website development skills. Their team's attention to detail and innovative approach resulted in a website that exceeded our expectations. Highly recommended!
                </p>
                <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold"> RavindraBabu Ravula </span>
                    <span class="per-role"> CEO, Raudra Technologies </span>
                </div>
              </div>
          </div>
      </div>
  </div>

          <div class="col mt-4">
            <div class="testimonial-item bg-white rounded">
              <div class="client-logo">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.5 24C42.5 27.659 41.415 31.2357 39.3822 34.278C37.3494 37.3204 34.4601 39.6915 31.0797 41.0918C27.6992 42.492 23.9795 42.8584 20.3908 42.1445C16.8022 41.4307 13.5058 39.6687 10.9185 37.0815C8.33126 34.4942 6.56931 31.1978 5.85548 27.6092C5.14165 24.0205 5.50802 20.3008 6.90824 16.9204C8.30846 13.5399 10.6796 10.6506 13.722 8.61781C16.7643 6.58501 20.3411 5.5 24 5.5H42.5V24Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.625 22.172C29.625 20.6802 29.0324 19.2494 27.9775 18.1945C26.9226 17.1396 25.4918 16.547 24 16.547C22.5082 16.547 21.0774 17.1396 20.0225 18.1945C18.9676 19.2494 18.375 20.6802 18.375 22.172V25.828C18.375 27.3198 18.9676 28.7506 20.0225 29.8055C21.0774 30.8604 22.5082 31.453 24 31.453C25.4918 31.453 26.9226 30.8604 27.9775 29.8055C29.0324 28.7506 29.625 27.3198 29.625 25.828M29.625 31.433V5.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                  Working with Fireweb Technologies was a game-changer for our business. Their expertise in website development combined with their seamless communication made the entire process smooth and efficient. We're thrilled with the outcome!
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Deyasini Sengupta</span>
                    <span class="per-role">Graphic Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-white rounded mt-4">
              <div class="client-logo">
                <img src="https://flexwave.netlify.app/assets/Logo.avif" alt="" srcset="" style="max-width: 100px; max-height: 100px;" />
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                  Choosing Fireweb Technologies for our website project was one of the best decisions we made. Their dedication to delivering high-quality work and their ability to understand our unique requirements set them apart. Couldn't be happier with the final product!
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Samir Dey</span>
                    <span class="per-role">CEO, FlexWave</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();
