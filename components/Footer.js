function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="brand-logo">
              <a class="navbar-brand" href="#">
                <img class="BrandLogo" src="./Images/Logo-BgDark.svg" alt="" srcset="" />
              </a>
            </div>
            <div class="nav-links d-flex flex-column mt-4">
              <ul class="nav justify-content-left row-1">
              
              </ul>
              <ul class="nav justify-content-left row-2">
               
                <li class="nav-item">
                  <a class="nav-link" href="#Features">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Pricing">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#FAQ">Contacts</a>
                </li>
              </ul>
            </div>
            <div class="copyrights mt-4">
              © 2024 <a class='text-decoration-underline' href="https://github.com/Fireweb-Technologies">Fireweb Technologies</a>. All rights reserved
            </div>
          </div>
          
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
