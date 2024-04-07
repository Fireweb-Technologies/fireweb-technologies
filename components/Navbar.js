function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left  d-flex align-items-center" id="navbarNav">
  <a class="navbar-brand me-5" href="#">
    <img
      class="BrandLogo"
      src="./Images/logo.png"
      alt=""
      srcset=""
    />
  </a>
  <ul class="navbar-nav d-none d-lg-flex">
    <li class="nav-item">
      <a class="nav-link" href="#Features">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Pricing">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#FAQ">Help</a>
    </li>
  </ul>
</div>
  <button
    class="btn collapsed d-lg-none"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</div>
<div
  class="offcanvas offcanvas-end"
  tabindex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">
      
    </h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#Features">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#FAQ">Contact Us</a>
      </li>
    </ul>
    
  </div>
</div>
    `;
  navbar.appendChild(Container);
}
Navbar();
