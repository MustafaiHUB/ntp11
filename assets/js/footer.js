'use strict' // strict mode
const footer = document.querySelector(".footer");

const footerHTML = `
<div class="footerContainer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: info@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li class="footer-section li"><a href="#">Home</a></li>
        <li class="footer-section li"><a href="#">About Us</a></li>
        <li class="footer-section li"><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <ul class="social-links">
        <li><a href="#" target="_blank">Facebook</a></li>
        <li><a href="#" target="_blank">Twitter</a></li>
        <li><a href="#" target="_blank">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright &copy; 2024 | CPE Team.</p>
  </div>
</div>

`

footer.insertAdjacentHTML("beforeend", footerHTML);