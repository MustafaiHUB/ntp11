"use strict" // strict mode
const header = document.querySelector("header")

const headerHTML = `
<div class="container">
<a href="/index.html" class="img-link">
<img
  src="/assets/images/logo.png"
  class="logo"
  alt="Logo"
/>
</a>
<span class="menu-bars">&#9776;</span>
<nav class="nav">
  <ul class="main-ul">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/pages/about.html">About NTP</a></li>
    <li><a href="/pages/organizers.html">Organizers</a></li>
    <li><a href="/pages/sponsers.html">Sponsers</a></li>
    <li class="sub-menu">
      <div>
        <a href="/pages/projects.html">Projects Competition</a>
        <span class="open-ul-mobile">&#10549;</span>
      </div>
      <ul class="inner-ul">
        <li>
          <a href="/pages/participants.html">Call For Participation</a>
        </li>
        <li><a href="/pages/dates.html">Important Dates</a></li>
        <li><a href="/pages/guidelines.html">Report Guideline</a></li>
        <li><a href="/pages/submission.html">Project Submission</a></li>
      </ul>
    </li>
    <li><a href="/pages/parade-program.html">Parade Program</a></li>
    <li>
      <a
        href="/pages/contact-us.html"
        class="contact-us"
        >Contact Us</a
      >
    </li>
    <li>
      <a
        href="#"
        class="registration"
        >Registration</a
      >
    </li>
  </ul>
</nav>
</div>
`
header.insertAdjacentHTML("beforeend", headerHTML)

const footerHTML = `<div class="footerContainer">
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
</div>`
document.body.insertAdjacentHTML("beforeend", footerHTML)

if (window.location.host === "ntp11.netlify.app")
  window.history.replaceState(
    null,
    "",
    window.location.href.replace(".html", "")
  )
