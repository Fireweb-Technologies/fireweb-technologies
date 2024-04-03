function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Services we offer</h2>
  <p class="">
  Having a beautiful website is good. In fact, it's great.<br\> You know what’s better?<br\> A beautiful, revenue-driving site.
  That’s where we at FireWeb Technologies can help you.
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Web Development</div>
      <div class="description text-center">
        We design and develop homepage, landing pages, e-commerce sites and more.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Digital Marketing</div>
      <div class="description text-center">
        We offer services like sales funnel, email marketing, social media marketing, newsletter and more.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">SEO Management</div>
      <div class="description text-center">
        We help you to rank your website on the first page of Google search results.
      </div>
    </div>
  </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
