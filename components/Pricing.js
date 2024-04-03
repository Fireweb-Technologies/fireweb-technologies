function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
          <h2 class="text-center fw-bold">Pricing Packages</h2>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">LITE PACK</div>
              <div class="price">
                $199 <span class="duration">/ site</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>Static Webpage</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Logo and UI</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Hosting</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Content Writing</span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative tagged col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <span class="tag bg-primary-300">Recommended</span>
              <div class="title">STANDARD PACK</div>
              <div class="price">
                $479 <span class="duration">/ site</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>All Features from LITE</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Dynamic Webpage</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>API Integration</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Community Setup</span
                    >
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">PRO PACK</div>
              <div class="price">
                $999 <span class="duration">/ site</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>All Features from STANDARD</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>Payment Integration</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>CMS</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Admin Dashboard</span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
